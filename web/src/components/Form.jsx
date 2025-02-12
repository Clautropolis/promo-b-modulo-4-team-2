import UploadButton from "./UploadButton"
import '../styles/Form.scss'
import PropTypes from 'prop-types';

function Form({changeData, getFileImage, dataCard, setUrlDataCard, urlDataCard, messageError, setMessageError }) {
     
        //función manejadora con id reconocemos el input con value obtenemos su valor
    const handleChangeInput = (ev) => {
        const inputID = ev.target.id;
        const inputValue = ev.target.value;    
        changeData(inputID, inputValue); 
    };

    // const checkValidInput = () => {
               
    //     for (const element in dataCard) {
    //         if (element === '') {
    //             console.log("ERROR")
    //             } else {
    //             console.log("EXITOOOOOO")
    //                 }
    //             }
    //         }
            //Función funciona. Falta terminar el condicional. Sale por el else y no debería ser así. 
    
    const handleSaveProject = (ev) => {
        ev.preventDefault()
        fetch('https://dev.adalab.es/api/projectCard', {
            body: JSON.stringify(dataCard),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=> res.json())
        .then((data) => {
            // console.log(data)
            if (data.success){
                setUrlDataCard(data.cardURL)
            } else {
                setMessageError("❌ Hubo un problema al guardar el proyecto. Comprueba que todos los campos estén rellenos."); 
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
            <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput} value={dataCard.slogan}/>
            <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput} value={dataCard.repo}/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput} value={dataCard.demo}/>
            </div>         
            <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput} value={dataCard.technologies}/>
            <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput} value={dataCard.desc}></textarea>
        </fieldset>

        <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre la autora</legend>
            <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput} value={dataCard.autor}/>
            <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput} value={dataCard.job}/>
        </fieldset>

        <fieldset className="addForm__group--upload">
            <div className="upload_button">
                <UploadButton text="Subir foto del proyecto" id="image" getFileImage={getFileImage}/>
                <UploadButton text= "Subir foto de la autora" id="photo" getFileImage={getFileImage}/>
            </div>
            
            <div className="create_link">
                <button className="button--large" onClick={handleSaveProject}>Guardar proyecto</button>
                {urlDataCard ? <a className="link_card" href={urlDataCard} target="_blank">Ver proyecto</a> : <p>{messageError}</p>}
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
    urlDataCard : PropTypes.string

};

export default Form

//Tenemos que hacer validaciones del formulario. Tanto de rellenar todos los campos como de expresiones regulares (tipo de dato) que veirifcan el formato de cada campo (ejemplo: que en mail haya un @ y .com). Poner mensajes de aviso en caso de que no se haya rellenado correctamente.
//También tenemos que añadir los enlaces a los iconos de gitHub y dle repositorio para que se abran en una ventana nueva cuando pinchemos (target: _blank).
