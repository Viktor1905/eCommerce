import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from '@reduxjs/toolkit';
import { Filters } from '../../pages/catalog/components/catalogFilter/CatalogFilter.tsx';
import { ProductProjectionResponse } from '../../api/catalog/products.types.ts';
import { requestFilter } from '../../api/catalog/filter/request-filter.ts';
import { getProducts } from '../../api/catalog/request-products.ts';
import { defineMaxCost } from '../../api/catalog/max-request';
import { defineMinCost } from '../../api/catalog/min-request';

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
}
const initialState: CatalogState = {
  searchTerm: '',
  filters: { brand: [], discounted: [], for: [], priceRange: [0, 100] },
  sort: undefined,
  products: null,
  filteredProducts: null,
  isLoading: false,
  maxCost: await defineMaxCost(),
  minCost: await defineMinCost(),
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
    const { products, searchTerm, filters, sort, type } = thunkAPI.getState().catalog;
    try {
      if (!products) {
        return await getProducts();
      }
      return await requestFilter({ filters, sort, type, searchTerm });
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(`Failed to load catalog: ${error.message}`);
      }
      return thunkAPI.rejectWithValue(`Failed to load catalog`);
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
      })
      .addCase(loadCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message;
      });
  },
});

export const { setFilters, setSort, setFilteredProducts, setSearchTerm, setType } = slice.actions;
export default slice.reducer;
