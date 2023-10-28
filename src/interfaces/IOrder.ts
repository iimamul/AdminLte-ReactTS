import { Dayjs } from "dayjs";

export interface OrderInputs {
    orderId: string;
    customerName: string;
    orderDate: Dayjs | null;
    email: string;
    address: string;
    phoneNumber: string;
    productName: string;
    orderQuantity: number;
    unitPrice:number;
    orderDetails: string;
    totalAmount: number;
    // newDate: string;
  }