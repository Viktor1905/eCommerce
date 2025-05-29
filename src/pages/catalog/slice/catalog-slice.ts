import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from '@reduxjs/toolkit';
import { Filters } from '../components/catalogFilter/CatalogFilter.tsx';
import { ProductProjectionResponse } from '../../../api/catalog/products.types.ts';
import { requestFilter } from '../../../api/catalog/filter/requestFilter.ts';
import { getProducts } from '../../../api/catalog/requestProducts.ts';

export interface CatalogState {
  filters: Filters;
  sort?: string;
  products: ProductProjectionResponse | null;
  filteredProducts: ProductProjectionResponse | null;
  isLoading: boolean;
  error?: string;
}
const initialState: CatalogState = {
  filters: { brand: [], discounted: [], for: [], priceRange: [0, 0] },
  sort: undefined,
  products: null,
  filteredProducts: null,
  isLoading: false,
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
    const { products, filters, sort } = thunkAPI.getState().catalog;
    try {
      if (!products) {
        return await getProducts();
      }
      return await requestFilter(filters, sort);
    } catch (error) {
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
    setSort(state, action: PayloadAction<string | undefined>) {
      state.sort = action.payload;
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

export const { setFilters, setSort } = slice.actions;
export default slice.reducer;
