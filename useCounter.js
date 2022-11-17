// Custom hook es crear nuestro propios hook a travez de una funcion
// Pero estas al final siempre van a tener un hook propio de react

import {useState} from 'react';

export const useCounter = (value= 1) =>{

    const [counter, setCounter] = useState(value);

    const increment = (value) =>{
        setCounter(counter + 1);
        console.log(value);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    const resetCounter = () =>{
        setCounter(value)
    }

    return{
        counter,
        increment,
        decrement,
        resetCounter,
    }
}