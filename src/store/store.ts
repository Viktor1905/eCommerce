import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import catalogReducer from '../pages/catalog/slice/catalog-slice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    catalog: catalogReducer,
  },
});

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
// Infer types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
