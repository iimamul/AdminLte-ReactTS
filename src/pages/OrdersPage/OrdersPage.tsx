import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderList from './components/OrderList/OrderList';
import OrderForm from '~/pages/OrdersPage/components/OrderForm/OrderForm';
import { selectOrders,loadingState,errorState } from '~/features/orders/ordersSelectors';
import './OrdersPage.css';
import { createOrderAsync, fetchOrdersAsync } from '~/features/orders/ordersSlice';
import { AppDispatch } from '~/store/store';
import { OrderInputs } from '~/interfaces/IOrder';

const OrdersPage: React.FC = () => {
  const orders = useSelector(selectOrders);
  const states = useSelector(loadingState);
  const errors = useSelector(errorState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOrdersAsync())
      .then(() => {
        // Handle success, e.g., show success message, update order list, etc.
      })
      .catch((error) => {
        // Handle error, e.g., show error message, etc.
      });
  }, [dispatch]);

  console.log('loadingStates: ',states)
  console.log('errors: ',errors)

  const handleOrderFormSubmit = (formData: OrderInputs) => {
    dispatch(createOrderAsync(formData))
      .then(() => {
        // Handle success, e.g., show success message, update order list, etc.
      })
      .catch((error) => {
        // Handle error, e.g., show error message, etc.
      });
  };

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <div className="orders-page-content">
        <div className="order-form-container">
          <h2>Create New Order</h2>
          <OrderForm onSubmit={handleOrderFormSubmit} />
        </div>
        <div className="order-list-container">
          <h2>Order List</h2>
          <OrderList orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
