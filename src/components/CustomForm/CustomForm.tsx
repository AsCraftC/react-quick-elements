import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { InputForm, ButtonForm } from './components'

import { schema, formValues } from './model/form.model'


export const CustomForm = () => {
  const {control, handleSubmit, formState: {errors}} = useForm<formValues>({
    resolver: zodResolver(schema)
  })

  const onSubmit : SubmitHandler<formValues> = (data) => {
    console.log("hola");
    
    console.info(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name='name' control={control} label='Nombre de usuario' type='text' error={errors.name}/>
      <InputForm name='email' control={control} label='Email de usuario' type='email' error={errors.email}/>
      <InputForm name='password' control={control} label='Contraseña' type='password' error={errors.password}/>
      <InputForm name='repeatPassword' control={control} label='Repetir contraseña' type='password' error={errors.repeatPassword}/>

      <ButtonForm />
    </form>
  )
}
