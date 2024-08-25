import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    
    const [ counter, setCounter ] = useState( value );
    

    const handleApp = () => {
        // console.log(event);
        setCounter(counter + 1);
        // otra forma de utilizar este hook y poder reutilizarlo es de esta manera:
        // setCounter ((c) => c + 1);

    }
    const handleApp2 = () => {
        // console.log(event);
        setCounter(counter - 1);

    }
    const handleApp3 = () => {
        // console.log(event);
        setCounter(value);

    }

    return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
    <button onClick={ handleApp }> +1 </button>
    <button onClick={ handleApp2 }> -1 </button>
    <button onClick={ handleApp3 }> reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;

