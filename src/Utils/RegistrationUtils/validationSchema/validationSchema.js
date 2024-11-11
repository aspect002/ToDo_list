import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup.string()
        .required('Username required')
        .min(3, 'Minimum 3 characters'),

    email: yup.string()
        .email('Invalid email')
        .required('Email required'),

    password: yup.string()
        .required('Password required')
        .min(8, 'Minimum 8 characters')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>_]/, 'Must contain at least one special character'),

    gender: yup.string()
        .oneOf(['male', 'female'], 'Select a gender')
        .required('Gender required'),

    age: yup.number()
        .typeError('Age must be a number')
        .required('Age required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .min(1, 'Age must be at least 1')
        .max(120, 'Age must be less than or equal to 120'),
});

export default validationSchema;
