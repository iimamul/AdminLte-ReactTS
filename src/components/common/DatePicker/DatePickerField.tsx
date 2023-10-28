import * as React from 'react';
import { Dayjs } from 'dayjs';
import { Controller, Control } from 'react-hook-form';
import { LocalizationProvider, DatePicker, DatePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface DatePickerFieldProps extends Omit<DatePickerProps<Dayjs>, 'value' | 'onChange'> {
  label: string;
  name: string;
  control: Control<any>;
  dateFormat?: string;
  // style: React.StyleHTMLAttributes<T>
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  name,
  control,
  // style,
  dateFormat = 'YYYY-MM-DD',
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...field}
            {...rest}
            label={label}
            
            value={field.value ?? null}
            onChange={(date) => field.onChange(date?.toDate() ?? null)}
            // textField={(params: TextFieldProps) => <TextField {...params} />}
            format={dateFormat}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DatePickerField;
