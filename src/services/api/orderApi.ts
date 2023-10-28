// services/api/orderApi.ts

import axios from 'axios';
import { OrderInputs } from '~/interfaces/IOrder';

const BASE_URL = import.meta.env.VITE_API_BASE_URL; 

// Fetch orders from the server
export const fetchOrders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Create a new order on the server
export const createOrder = async (orderData:OrderInputs) => {
  try {
    console.log(orderData)
    const response = await axios.post(`${BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Update an existing order on the server
export const updateOrder = async (orderId:string, orderData:OrderInputs) => {
  try {
    const response = await axios.put(`${BASE_URL}/orders/${orderId}`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
};

// Delete an order from the server
export const deleteOrder = async (orderId:string) => {
  try {
    await axios.delete(`${BASE_URL}/orders/${orderId}`);
  } catch (error) {
    console.error('Error deleting order:', error);
    throw error;
  }
};
