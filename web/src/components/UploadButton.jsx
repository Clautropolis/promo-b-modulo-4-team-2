import '../styles/UploadButton.scss';
//import React from 'react';
import PropTypes from 'prop-types';


function UploadButton({getFileImage, id, text}) {

  const fr = new FileReader();
  //const myFileField = React.createRef();

  const handleFile = (ev) => {
    const urlImage = ev.currentTarget.files[0];

    if (ev.currentTarget.files.length > 0) {
      const myFile = urlImage;
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  }

  const getImage = () => {
    const urlImage = fr.result;
    getFileImage(id, urlImage);
  };

  

  return (
    <>
    <label htmlFor={id} className="button">{text}</label>
    <input className="addForm__hidden" type="file" name={id} id={id} onChange={handleFile}/>
    </>

  )
}

UploadButton.propTypes = {
  getFileImage : PropTypes.func,
  id : PropTypes.string,
  text : PropTypes.string
}

export default UploadButton


