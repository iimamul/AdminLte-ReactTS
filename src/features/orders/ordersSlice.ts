// features/orders/ordersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrders, createOrder, updateOrder, deleteOrder } from '../../services/api/orderApi';
import { OrderInputs } from '~/interfaces/IOrder';
import { RequestStatus } from '~/types/TRequestStatus';


interface OrdersState {
  orders: OrderInputs[];
  loading: RequestStatus;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: null,
  error: null,
};

export const fetchOrdersAsync = createAsyncThunk('orders/fetchOrders', async () => {
  try {
    const orders = await fetchOrders();
    return orders;
  } catch (error) {
    throw Error('Failed to fetch orders.');
  }
});

export const createOrderAsync = createAsyncThunk('orders/createOrder', async (orderData: OrderInputs) => {
  try {
    const createdOrder = await createOrder(orderData);
    return createdOrder;
  } catch (error) {
    throw Error('Failed to create order.');
  }
});

export const updateOrderAsync = createAsyncThunk('orders/updateOrder', async ({ orderId, orderData }: { orderId: string, orderData: OrderInputs }) => {
  try {
    const updatedOrder = await updateOrder(orderId, orderData);
    return updatedOrder;
  } catch (error) {
    throw Error('Failed to update order.');
  }
});

export const deleteOrderAsync = createAsyncThunk('orders/deleteOrder', async (orderId: string) => {
  try {
    await deleteOrder(orderId);
    return orderId;
  } catch (error) {
    throw Error('Failed to delete order.');
  }
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersAsync.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(fetchOrdersAsync.fulfilled, (state, action) => {
        state.loading = "successful";
        state.orders = action.payload;
      })
      .addCase(fetchOrdersAsync.rejected, (state) => {
        state.loading = "rejected";
        state.error = 'Failed to fetch orders.';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      .addCase(createOrderAsync.rejected, (state) => {
        state.error = 'Failed to create order.';
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const index = state.orders.findIndex((order) => order.orderId === updatedOrder.orderId);
        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
      })
      .addCase(updateOrderAsync.rejected, (state) => {
        state.error = 'Failed to update order.';
      })
      .addCase(deleteOrderAsync.fulfilled, (state, action) => {
        const orderId = action.payload;
        state.orders = state.orders.filter((order) => order.orderId !== orderId);
      })
      .addCase(deleteOrderAsync.rejected, (state) => {
        state.error = 'Failed to delete order.';
      });
  },
});

export default ordersSlice.reducer;
