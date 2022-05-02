import  { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value // con target.name tengo el elemto que cambio, y con .value tengo el valor que cambio
        })
    }

    return [values, handleInputChange, reset];
};