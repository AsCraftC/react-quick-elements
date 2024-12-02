import zod from 'zod'

export const schema = zod.object(
  {
    name: zod.string()
      .min(4,   {message : "El nombre debe tener al menos 4 caracteres"}),
    email: zod.string()
      .email(   {message : "El email no es válido"}),
    age: zod.number()
      .int()
      .positive()
      .min(18,  {message : "Debes ser mayor de edad"}),
    password: zod.string()
      .min(8,   {message : "La contraseña debe tener al menos 8 caracteres"})
      .max(22,  {message : "La contraseña no puede tener más de 20 caracteres"}),
    repeatPassword: zod.string()
      .min(8,   {message : "La contraseña debe tener al menos 8 caracteres"})
      .max(22,  {message : "La contraseña no puede tener más de 20 caracteres"}),
  }
).refine(data => data.password === data.repeatPassword, {
    message: "Las contraseñas no coinciden",
    path: ["repeatPassword"]
  }
)

export type formValues = zod.infer<typeof schema>