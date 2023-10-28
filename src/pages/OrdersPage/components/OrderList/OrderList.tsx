import React from 'react';
import Table from '~/components/common/Table/Table';
import { OrderInputs } from '~/interfaces/IOrder';

// interface Order {
//   id: number;
//   customerName: string;
//   orderDate: string;
//   totalAmount: number;
// }

interface OrderListProps {
  orders: OrderInputs[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  const tableHeaders = ['SL','Order ID', 'Customer Name','Email','Address','Phone','Product Name','Order Qty','Unit Price','Order Details', 'Order Date', 'Total Amount'];

  const tableData = orders.map((order,index) => ({
    'SL': index+1,
    'Order ID': order.orderId,
    'Customer Name': order.customerName,
    'Email' : order.email,
    'Address': order.address,
    'Phone': order.phoneNumber,
    'Product Name': order.productName,
    'Order Qty': order.orderQuantity,
    'Unit Price': order.unitPrice,
    'Order Details': order.orderDetails,
    'Order Date': order.orderDate,
    'Total Amount': order.totalAmount,
  }));

  return (
    <Table headers={tableHeaders} data={tableData} />
  );
};

export default OrderList;
