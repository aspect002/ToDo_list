import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email('invalid email format').required('Email required'),
    password: yup.string().required('Password required'),
});

export default validationSchema;
