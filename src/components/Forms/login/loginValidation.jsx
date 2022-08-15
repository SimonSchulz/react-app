import * as Yup from 'yup';

const loginValidation = Yup.object({
  email: Yup.string()
    .min(5, 'too short username')
    .required('required!'),
  password: Yup.string()
    .min(7, 'too short password!')
    .required('required!'),
});

export default loginValidation;
