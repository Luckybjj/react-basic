
import { useState } from "react";  // Importacion del hooks 'useState'
import PropTypes from "prop-types";

// Todos los hooks deben empezar con el nombre de use, es una regla que recomienda React

// Componente
export const CounterApp = ({ value }) => {

    /*
    'useState' es un hook en React que te permite agregar estado a un componente funcional.

     const [state, setState] = useState(initialState);

    . 'state' -> es la variable que almacena el estado actual
    . 'setState' -> es la función que se utiliza para actualizar el estado
    La función 'useState' recibe un parametro 'initialState' que es el valor inicial del estado,
    puede ser un string, objeto, array u otro dato.
    */

    // En react cuando se cambia el estado el componente entero se vuelve a ejecutar

    const [counter, setCounter] = useState(value)
    // suma
    const handleAdd = () => {
        // console.log(event);
        setCounter(counter + 1)
        // setCounter( (c) => c + 1);   // c -> valor actual del counter
    };
    // resta
    const handleSubstract = () => {setCounter(counter + -1)};
    // reset
    const handleReset = () => {setCounter(value)};


    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>reset</button>
        </>
    );
};

/*
Este ejemplo tiene el componente CounterApp, tiene un estado llamado 'counter' inicializado en '0'.
Al hacer click en 'handleAdd' se llama a la función 'handleAdd' que actualiza el estado  utilizando 'setCounter'
'setCounter' toma un nuevo valor y actualiza el estado, lo que provoca la nueva renderizaxcón del componente
*/


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
    value: 0,
};
