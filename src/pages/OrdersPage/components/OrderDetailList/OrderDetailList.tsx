import React from 'react';
import Table from '~/components/common/Table/Table';
import { OrderDetails } from '~/interfaces/IOrderDetail';

// interface Order {
//   id: number;
//   customerName: string;
//   orderDate: string;
//   totalAmount: number;
// }

interface OrderDetailListProps {
  orderDetails: OrderDetails[];
}

const OrderDetailList: React.FC<OrderDetailListProps> = ({ orderDetails }) => {
  const tableHeaders = ['SL','Product Name','Other Details','Order Qty','Unit Price', 'Total Amount'];

  const tableData = orderDetails.map((orderDtl,index) => ({
    'SL': index+1,
    'Other Details': orderDtl.otherDetails,
    'Product Name': orderDtl.productName,
    'Order Qty': orderDtl.orderQuantity,
    'Unit Price': orderDtl.unitPrice,
    'Total Amount': orderDtl.totalAmount,
  }));

  return (
    <Table headers={tableHeaders} data={tableData} />
  );
};

export default OrderDetailList;
