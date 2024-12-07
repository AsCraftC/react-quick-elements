import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

import { InputForm, ButtonForm } from './components'

import { schema, formValues } from './model/form.model'


export const CustomForm = () => {
  const {control, handleSubmit, formState: {errors}} = useForm<formValues>(
    {
      resolver: zodResolver(schema),
      mode    : "onBlur"
    }
  )

  const onInvalid : SubmitErrorHandler<formValues> = (errors) => {
    console.error(errors);
  }

  const onSubmit : SubmitHandler<formValues> = (data) => {
    console.info("success", data)
    /* Aquí iría el post a la API */
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
      <InputForm name='name' control={control} label='Nombre de usuario' error={errors.name}/>
      <InputForm name='age' control={control} label='Edad del Usuario' type='number' error={errors.age} />
      <InputForm name='email' control={control} label='Email de usuario' type='email' error={errors.email}/>
      <InputForm name='password' control={control} label='Contraseña' type='password' error={errors.password}/>
      <InputForm name='repeatPassword' control={control} label='Repetir contraseña' type='password' error={errors.repeatPassword}/>

      <ButtonForm label='Enviar'/>
    </form>
  )
}
