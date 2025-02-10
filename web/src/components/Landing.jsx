import { Link } from "react-router-dom";
import Card from "./Card";
import '../styles/Landing.scss';



function Landing ({dataCard}){

    return(
    <>
       
       <section className="hero">
            <h2 className="title">Proyectos molones</h2>
            <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
            <Link to="/" className="button--link">Crear nuevo proyecto</Link>
        </section>
        <section className="projects">
        <Card dataCard={dataCard}/>
        <Card dataCard={dataCard}/>
        <Card dataCard={dataCard}/>
        <Card dataCard={dataCard}/> 
        </section>

        
    </>
    )
}

export default Landing;

//Para hacer el landing lo que vamos a tener que hacer es tener un array con todas las tarjetas y recorrerlo con map para pintar cada una de las tarjetas del array.