import { z as zod } from 'zod'

const minPassChar = 8;
const maxPassChar = 20;

export const schema = zod.object(
  {
    name: zod.string({required_error: 'Necesitamos llamarte de alguna forma'})
      .min(4,   {message : "El nombre debe tener al menos 4 caracteres"}),
    email: zod.string({required_error: 'Por seguridad necesitamos tener un email de respaldo'})
      .email( {message : "El email no se ve como un email"}),
      age: zod.coerce.number({required_error : 'La edad es necesaria para ofrecer nuestros servicios' ,invalid_type_error: 'Eso no es un número'})
      .int( {message : "¿Quien usa decimales en las edades?"})
      .positive( {message : "No existen edades negativas"})
      .min(18,  {message : "Debes ser mayor de edad"}),
    password: zod.string({required_error: '¿Cómo piensas que te sabremos si eres tu sin un contraseña'})
      .min(minPassChar,   {message : `La contraseña debe tener al menos ${minPassChar} caracteres`})
      .max(maxPassChar,  {message : `La contraseña no puede tener más de ${maxPassChar} caracteres`}),
    repeatPassword: zod.string({required_error: 'Queremos comprobar si escribiste lo mismo, ¿es tan difícil?'})
      .min(minPassChar,   {message : `La contraseña debe tener al menos ${minPassChar} caracteres`})
      .max(maxPassChar,  {message : `La contraseña no puede tener más de ${maxPassChar} caracteres`}),
  }
).refine(data => data.password === data.repeatPassword, {
    message: "Las contraseñas no coinciden",
    path: ["repeatPassword"]
  }
)

export type formValues = zod.infer<typeof schema>