import * as yup from 'yup';

export const useSchema = yup.object().shape({
    name: yup.string().typeError('Error').required("Required"),
    email: yup.string().email().required("Required"),
    password: yup.string().min(4).max(20).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match').required("Required"),
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().required("Required"),
    password: yup.string().min(4).max(20).required("Required"),
})