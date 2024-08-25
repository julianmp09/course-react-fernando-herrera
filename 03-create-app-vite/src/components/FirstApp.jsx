// const getSaludo = () =>{
//     return "hola soy la funcion saludar";
// }
import PropTypes from 'prop-types';


export const FirstApp = ({title}) =>{
    // console.log(props);
    
    return (
        <>
        <h1>{title}</h1>
        <p>Soy un subtitulo</p>
        {/* <h1>{JSON.stringify(newMessage)}</h1> */}
        </>
    
);
}

FirstApp.propTypes ={
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "No hay titulo"
}