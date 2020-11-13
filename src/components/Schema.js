import * as yup from 'yup'


const Schema = yup.object().shape({
    name: yup.string().required('user is required').min(2, 'name needs to be atleast 2 characters'),
    size: yup.string().oneOf(['small', 'medium', 'large'], 'Size Matters'),
    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    pineapple: yup.boolean(),
    bacon: yup.boolean(),
    instructions: yup.string()
})

export default Schema;