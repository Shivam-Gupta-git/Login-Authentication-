import yup, { Schema } from 'yup'

export const userSchema = yup.object({
  userName: yup
  .string()
  .trim()
  .required('userName must be required')
  .min(3, 'userName must be atleast 3 chracters'),

  email: yup
  .string()
  .required('email must be required')
  .trim()
  .email('the email is not valid one'),

  password: yup
  .string()
  .required('password must be required')
  .trim()
  .min(8, 'password must be atleast 8 character')
})

export const validateUser = (Schema) => async (req, res, next) => {
  try {
    await Schema.validate(req.body)
    next()
  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
} 