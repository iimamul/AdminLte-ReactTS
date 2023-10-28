import { RootState } from '~/store/store.ts';

export const selectOrders = (state: RootState) => state.orders.orders;
// Add other selectors as needed
export const loadingState = (state: RootState) => state.orders.loading;
export const errorState = (state: RootState) => state.orders.error;
