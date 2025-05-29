import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Filters } from '../components/catalogFilter/CatalogFilter.tsx';
import { ProductProjectionResponse } from '../../../api/catalog/products.types.ts';
import { requestFilter } from '../../../api/catalog/filter/requestFilter.ts';

export interface CatalogState {
  filters: Filters;
  sort?: string;
  products: ProductProjectionResponse | null;
  isLoading: boolean;
  error?: string;
}

const initialState: CatalogState = {
  filters: { brand: [], discounted: [], for: [], priceRange: [0, 0] },
  sort: undefined,
  products: null,
  isLoading: false,
};

export const loadCatalog = createAsyncThunk<
  ProductProjectionResponse,
  undefined,
  {
    state: { catalog: CatalogState }; // Correct state structure
    rejectValue: string;
  }
>('catalog/load', async (_, thunkAPI) => {
  const { filters, sort } = thunkAPI.getState().catalog; // Removed .state
  return await requestFilter(filters, sort);
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
        state.products = action.payload;
      })
      .addCase(loadCatalog.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message;
      });
  },
});

export const { setFilters, setSort } = slice.actions;
export default slice.reducer;
