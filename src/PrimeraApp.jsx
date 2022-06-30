import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {
    console.log(saludo);
    return <h1>Hola mi mundo {saludo} {subtitulo}</h1>
}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'subtitulo 1'   
}
export default PrimeraApp;
