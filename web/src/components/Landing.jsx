import { Link } from "react-router-dom";
import Card from "./Card";
import '../styles/Landing.scss';
import PropTypes from 'prop-types';


function Landing ({listProjects}){

    console.log(listProjects);
    const listProjectsHTML = listProjects.map((eachProject, index) => {

        return  <Card dataCard={eachProject} key={index}/>

    })

    return(
    <>
        <section className="hero">
            <h2 className="title">Proyectos molones</h2>
            <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
            <Link to="/" className="button--link">Crear nuevo proyecto</Link>
        </section>
        <section className="projects">
            {listProjectsHTML}
        </section>
    </>
    )
}

Landing.propTypes = {
    listProjects: PropTypes.array
};

export default Landing;

//Para hacer el landing lo que vamos a tener que hacer es tener un array con todas las tarjetas y recorrerlo con map para pintar cada una de las tarjetas del array.