import { Control, Controller, FieldError } from "react-hook-form";
import './InputForm.css'

import { formValues } from "../model/form.model.ts";

interface Props {
  name    : keyof formValues;
  control : Control<formValues>;
  label   : string;
  type   ?: string;
  error  ?: FieldError;
}

export const InputForm = ({name, control, label, type, error} : Props) => {
  return (
      <div className='input'>
        <label className='input__label' htmlFor={name}> {label} </label>
        <Controller 
          control = {control}
          name = {name}
          render  = { ({field}) =>
            (<input 
              id    = {name}
              type  = {type}
              {... field}
              className= {`input__input ${error && 'input__input--is-invalid'}`}
            />)
          }
        />
        {error && <div className='input__invalid-feedback'>{error.message}</div>}
      </div>
  )
}
