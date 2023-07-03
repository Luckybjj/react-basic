// Para poder agrupar varios elementos, estos deben venir en un nodo padre, para aquello se utiliza -> 'Fragment' <> </>,
// dentro de las llaves se pueden poner expresiones de JS que no sean objetos

// En vite se debe de instalar las PropTypes manualmente -> estas nos sirven para definir el tipo a las props
import PropTypes from "prop-types";

const newMessage = "LuckyBjj";
const newArray = [1, 2, 3, 4, 5];
const newObject = {
    message: "Hola Mundo",
    tittle: "LuckyBjj",
};
const newSuma = (a, b) => {
    return `Este suma es desde una función ${a + b}`;
};
const newFunction = () => {
    return "Este mensaje es desde una función";
};

// Las "props" en React son una forma de pasar datos de un componente padre a un componente hijo
// Son un mecanismo de comunicación entre componentes
export const FirstApp = ({ title, subTitle, name }) => {    // Se extrae y desectrustura directamente la propiedad del componente.
    return (
        <>
            {/* <h1>{ props.title }</h1> */}
            <h1>{newMessage}</h1>
            <h2>{newObject.message}</h2>
            <h2>{newObject.tittle}</h2>
            {/* esta sería una forma de imprimir un objeto en el html */}
            <code>{JSON.stringify(newObject)}</code>
            <h3>{newArray}</h3>
            <h2>{newFunction()}</h2>
            <h3>{newSuma(3, 4)}</h3>
            {/* Estas son las props heredadas desde el componente */}
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};
// En este lugar defino el tipo y las propiedades de las props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
// Se puede definir las propiedades por defecto, cuando no se realizan en el componente padre
FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Bryan Lagos'
}