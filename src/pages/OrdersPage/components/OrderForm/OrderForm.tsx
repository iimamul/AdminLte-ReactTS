import { useForm, SubmitHandler } from 'react-hook-form';
import Button from 'components/common/Button/Button';
import Input from 'components/common/Input/Input';
import { OrderInputs } from '~/interfaces/IOrder';
import './OrderForm.css'
import DatePickerField from '~/components/common/DatePicker/DatePickerField';
// import { Divider } from '@mui/material';
import OrderDetailList from '../OrderDetailList/OrderDetailList';
import Paper from '@mui/material/Paper';

import { DevTool } from '@hookform/devtools';

interface OrderFormProps {
  onSubmit: SubmitHandler<OrderInputs>;
}

const InputStyle = {
  // marginLeft: "1rem",
  marginTop: "1rem",
  marginRight: "1rem"

}

const AddDetails = () => {
  console.log()
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<OrderInputs>();

  const handleOrderFormSubmit = (formData: OrderInputs) => {
    console.log(formData);
    onSubmit(formData);
    reset(); // Clear the form after successful submission
  };
  return (
    <Paper style={{ padding: '1rem' }}>
      <form onSubmit={handleSubmit(handleOrderFormSubmit)}>
        <div className="parent-data">
          <div className='form-control'>
            <Input
              type="text"
              style={InputStyle}
              label="Customer Name"
              {...register('customerName', { required: { value: true, message: "Customer Name is Required!!" } })}
            />
            {/* {errors.customerName && <span style={{color:'red'}}>This Name field is required</span>} */}
            <span className='error'>{errors.customerName?.message}</span>
          </div>
          <div className='form-control'>
            <div style={InputStyle}>
              <DatePickerField
                label="Order Date"
                // name="orderDate"
                // style={InputStyle}
                control={control}
                {...register('orderDate', { required: { value: true, message: "Order date is Required!!" } })}
              />
            </div>
            {errors.orderDate && <span className='error'>{errors.orderDate.message}</span>}
          </div>
          <div className='form-control'>
            <Input
              type="email"
              style={InputStyle}
              label="Email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className='error'>Please enter a valid email address</span>}
          </div>
          <div className='form-control'>
            <Input
              type="text"
              style={InputStyle}
              label="Address"
              {...register('address', { required: true })}
            />
            {errors.address && <span className='error'>This field is required</span>}
          </div>
          <div className='form-control'>
            <Input
              type="text"
              style={InputStyle}
              label="Phone Number"
              {...register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && <span className='error'>This field is required</span>}
          </div>
        </div>
        {/* <Divider orientation="horizontal" /> */}

        <Paper className='row' elevation={3} style={{ padding: ".5rem" }}>
          <div className='row-item'>
            <div className='form-control'>
              <Input
                type="text"
                style={InputStyle}
                label="Product Name"
                {...register('productName', { required: true })}
              />
              {errors.productName && <span className='error'>This field is required</span>}
            </div>
            <div className='form-control'>
              <Input
                type="number"
                style={InputStyle}
                label="Order Quantity"
                {...register('orderQuantity', { required: true })}
              />
              {errors.orderQuantity && <span className='error'>This field is required</span>}
            </div>
            <div className='form-control'>
              <Input
                type="number"
                style={InputStyle}
                label="Unit Price"
                {...register('unitPrice', { required: true })}
              />
              {errors.orderQuantity && <span className='error'>This field is required</span>}
            </div>
            <div className='form-control'>
              <Input
                type="text"
                style={InputStyle}
                label="Order Details"
                {...register('orderDetails', { required: true })}
              />
              {errors.orderDetails && <span className='error'>This field is required</span>}
            </div>
            <div className='form-control'>
              <Input
                type="number"
                style={InputStyle}
                label="Total Amount"
                {...register('totalAmount', { required: true })}
              />
              {errors.totalAmount && <span className='error'>This field is required</span>}
            </div>

            <Button type="button" color='secondary' style={{ marginTop: "1rem", height: "3rem" }} onClick={AddDetails}>Add Details</Button>

          </div>
          <div style={{ marginTop: "1rem", width: "70%" }}>
            <OrderDetailList orderDetails={[]} />
          </div>

        </Paper>
        <br />

        {/* <input type='date' style={{width:'10rem',fontSize:'1rem'}} {...register('newDate',{required: false})}></input> */}

        <Button type="submit" style={{ marginTop: '1rem',height:"3rem" }}>Save Order</Button>

      </form>
      <DevTool control={control} ></DevTool>
    </Paper>

  );
};

export default OrderForm;
