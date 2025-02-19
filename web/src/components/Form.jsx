import UploadButton from "./UploadButton"
import '../styles/Form.scss'
import PropTypes from 'prop-types';
import { useState } from "react";

function Form({changeData, getFileImage, dataCard, setUrlDataCard, urlDataCard, messageError, setMessageError }) {

    const [errors, setErrors] = useState ({
        name: '',
        slogan: '',
        repo: '',
        demo: '',
        technologies: '',
        desc: '',
        autor: '',
        job: '',
        photo:'',
        image:''  
    });
     
        // función manejadora con id reconocemos el input con value obtenemos su valor
    const handleChangeInput = (ev) => {
        const inputID = ev.target.id;
        const inputValue = ev.target.value;    
        changeData(inputID, inputValue); 
    };

    const checkValidInput = () => {
        
        const errorsClone = {...errors}

        if(dataCard.name === '') {
                errorsClone.name =  `Falta rellenar el nombre`
            }

        if(dataCard.slogan === '') {
                errorsClone.slogan = 'Falta rellenar el slogan'
            }
        
        if(dataCard.repo === '') {
                errorsClone.repo = 'Falta rellenar el campo del repositorio'
            }

        if(dataCard.demo === '') {
                errorsClone.demo = 'Falta rellenar el campo de la demo'
            }
        
        if(dataCard.technologies === '') {
                errorsClone.technologies = 'Falta rellenar las tecnologías'
            }

        if(dataCard.desc === '') {
                errorsClone.desc = 'Falta rellenar la descripción'
            }
        if(dataCard.autor === '') {
                errorsClone.autor = 'Falta rellenar el autor o la autora'
            }
        if(dataCard.job === '') {
                errorsClone.job = 'Falta rellenar la profesión'
            }
        if(dataCard.photo === '') {
                errorsClone.photo = 'Falta subir la imagen del autor o la autora'
            }
        if(dataCard.image === '') {
                errorsClone.image = 'Falta subir la imagen del proyecto'
            }

        setErrors(errorsClone)
    
    }
            
    
    const handleSaveProject = (ev) => {
        ev.preventDefault()
        checkValidInput()

        fetch('http://localhost:5005/project/add', {
            body: JSON.stringify(dataCard),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> res.json())
        .then((data) => {
            

            console.log(data)
            if (data.success){
                setUrlDataCard(data.cardURL)
            } else {
                setMessageError(`❌ Hubo un problema al guardar el proyecto.`); 
            }
        })
        
        // checkValidInput()
    }

    return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
            <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={ handleChangeInput} value={dataCard.name}/>
            <span className="error_message">{errors.name}</span>
            <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput} value={dataCard.slogan}/>
            <span className="error_message">{errors.slogan}</span>
            <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput} value={dataCard.repo}/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput} value={dataCard.demo}/>
            </div>
            <div className="error_container">
                <span className="error_message">{errors.repo}</span>
                <span className="error_message">{errors.demo}</span>
            </div>         
            <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput} value={dataCard.technologies}/>
            <span className="error_message">{errors.technologies}</span>
            <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput} value={dataCard.desc}></textarea>
            <span className="error_message">{errors.desc}</span>
        </fieldset>

        <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre la autora</legend>
            <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput} value={dataCard.autor}/>
            <span className="error_message">{errors.autor}</span>
            <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput} value={dataCard.job}/>
            <span className="error_message">{errors.job}</span>
        </fieldset>

        <fieldset className="addForm__group--upload">
            <div className="upload_button">
                <UploadButton text="Subir foto del proyecto" id="image" getFileImage={getFileImage}/>
                <UploadButton text= "Subir foto de la autora" id="photo" getFileImage={getFileImage}/>
            </div>
            <div className="error_container">
                <span className="error_message">{errors.photo}</span>
                <span className="error_message">{errors.image}</span>
            </div>
            <div className="create_link">
                <button className="button--large" onClick={handleSaveProject}>Guardar proyecto</button>
                {urlDataCard ? <a className="link_card" href={urlDataCard} target="_blank">Ver proyecto</a> : <p className="general_error">{messageError}</p>}
            </div>
        </fieldset>
        
        </form>
    )
}

Form.propTypes = {
    changeData : PropTypes.func,
    dataCard : PropTypes.object,
    setUrlDataCard : PropTypes.func,
    getFileImage : PropTypes.func,
    urlDataCard : PropTypes.string,
    messageError: PropTypes.string, 
    setMessageError: PropTypes.func

};

export default Form

//Tenemos que hacer validaciones del formulario. Tanto de rellenar todos los campos como de expresiones regulares (tipo de dato) que veirifcan el formato de cada campo (ejemplo: que en mail haya un @ y .com). Poner mensajes de aviso en caso de que no se haya rellenado correctamente.
//También tenemos que añadir los enlaces a los iconos de gitHub y dle repositorio para que se abran en una ventana nueva cuando pinchemos (target: _blank).
