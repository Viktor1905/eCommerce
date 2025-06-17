import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from '@reduxjs/toolkit';
import { Filters } from '../../pages/catalog/components/catalogFilter/CatalogFilter.tsx';
import { ProductProjectionResponse } from '../../api/catalog/products.types.ts';
import { requestFilter } from '../../api/catalog/filter/request-filter.ts';
import { defineMaxCost } from '../../api/catalog/max-request';
import { defineMinCost } from '../../api/catalog/min-request';
import { requestProductsQuantity } from '../../api/catalog/request-products-quantity.ts';
import { getProducts } from '../../api/catalog/request-products.ts';

export interface CatalogState {
  searchTerm: string;
  filters: Filters;
  sort?: string;
  products: ProductProjectionResponse | null;
  filteredProducts: ProductProjectionResponse | null;
  isLoading: boolean;
  error?: string;
  type?: string;
  maxCost: number;
  minCost: number;
  page: number;
  limit: number;
  productsLength: number;
  pageQuantity: number;
}
const initialState: CatalogState = {
  searchTerm: '',
  filters: { brand: [], discounted: [], for: [], priceRange: [0, 100] },
  sort: undefined,
  products: null,
  filteredProducts: null,
  isLoading: false,
  maxCost: 0,
  minCost: 0,
  page: 1,
  limit: 6,
  productsLength: 0,
  pageQuantity: 1,
};
interface stateReject {
  state: { catalog: CatalogState };
  rejectValue: string;
}
export const loadCatalog: AsyncThunk<ProductProjectionResponse, undefined, stateReject> =
  createAsyncThunk<
    ProductProjectionResponse,
    undefined,
    {
      state: { catalog: CatalogState };
      rejectValue: string;
    }
  >('catalog/load', async (_, thunkAPI) => {
    const { products, searchTerm, filters, sort, type, page, limit } = thunkAPI.getState().catalog;

    try {
      if (!products) {
        return await getProducts(page, limit);
      }
      return await requestFilter({ filters, sort, type, searchTerm, page, limit });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(`Failed to load catalog: ${error.message}`);
      }
      return thunkAPI.rejectWithValue(`Failed to load catalog`);
    }
  });
export const initializeCatalog = createAsyncThunk('catalog/initialize', async (_, thunkAPI) => {
  try {
    const [maxCost, minCost, productsLength] = await Promise.all([
      defineMaxCost(),
      defineMinCost(),
      requestProductsQuantity(),
    ]);
    return { maxCost, minCost, productsLength };
  } catch (error) {
    console.error('Initialization error:', error);
    return thunkAPI.rejectWithValue('Failed to initialize catalog');
  }
});
const slice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filters>) {
      state.filters = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSort(state, action: PayloadAction<string | undefined>) {
      state.sort = action.payload;
    },
    setType(state, action: PayloadAction<string | undefined>) {
      state.type = action.payload;
    },
    setFilteredProducts(state, action: PayloadAction<ProductProjectionResponse>) {
      state.filteredProducts = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.pageQuantity = state.productsLength ? Math.ceil(state.productsLength / state.limit) : 1;
    },
    setProductsLength(state, action: PayloadAction<number>) {
      state.productsLength = action.payload;
      state.pageQuantity = state.productsLength ? Math.ceil(state.productsLength / state.limit) : 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCatalog.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(loadCatalog.fulfilled, (state, action) => {
        state.isLoading = false;

        state.products ??= action.payload;

        state.filteredProducts = action.payload;

        state.productsLength = action.payload.total;
        state.pageQuantity = Math.ceil(action.payload.total / state.limit);
      })
      .addCase(loadCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message;
      })
      .addCase(initializeCatalog.fulfilled, (state, action) => {
        state.maxCost = action.payload.maxCost;
        state.minCost = action.payload.minCost;
        state.productsLength = action.payload.productsLength;
        state.pageQuantity = Math.ceil(action.payload.productsLength / state.limit);
      });
  },
});

export const {
  setFilters,
  setSort,
  setFilteredProducts,
  setSearchTerm,
  setType,
  setPage,
  setCount,
  setProductsLength,
} = slice.actions;
export default slice.reducer;
