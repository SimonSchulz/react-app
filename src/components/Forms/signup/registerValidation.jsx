import * as Yup from 'yup';

const registerValidation = Yup.object({
  name: Yup.string()
    .min(5, 'too short username')
    .required('required!'),
  email: Yup.string()
    .email('Invalid email')
    .required('required!'),
  password: Yup.string()
    .min(7, 'too short password!')
    .required('required!'),
  birthdate: Yup.date()
    .required('Required'),
  terms: Yup.boolean()
    .required('required!')
    .oneOf([true], 'required agrees'),
});

export default registerValidation;
