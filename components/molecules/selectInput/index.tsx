import {PropsWithChildren} from "react";
import {FormControl, MenuItem, Select} from "@mui/material";
import {
  Controller,
  UseControllerProps,
} from "react-hook-form";

export interface SelectInputProps<T> extends UseControllerProps<T>{
  items: {value: string, display: string}[];
}

const SelectInput = <T, >(props: PropsWithChildren<SelectInputProps<T>>) => {
  const {items, name, control} = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({field}) => (
        <FormControl>
          <Select {...field} >
            {items.map(({value, display}) => {
              return <MenuItem key={value} value={value}>{display}</MenuItem>
            })}
          </Select>
        </FormControl>
      )}
      />
  )
}

export default SelectInput;