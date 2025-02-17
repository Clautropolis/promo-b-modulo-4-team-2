import Form from "./Form"
import Hero from "./Hero"
import Preview from "./Preview"
import '../styles/MainSection.scss'
import PropTypes from 'prop-types';


function MainSection({dataCard, changeData, getFileImage, setUrlDataCard, urlDataCard, messageError, setMessageError}) {
  return (
    <main className="main">
        <Hero/>
        <Preview dataCard={dataCard}/>
        <Form changeData={changeData} getFileImage={getFileImage} dataCard={dataCard} setUrlDataCard={setUrlDataCard} urlDataCard={urlDataCard} messageError={messageError} setMessageError={setMessageError}/>
  </main>
  )
}

MainSection.propTypes = {
    dataCard : PropTypes.object,
    changeData : PropTypes.func,
    getFileImage: PropTypes.func,
    setUrlDataCard: PropTypes.func,
    urlDataCard: PropTypes.string,
    messageError : PropTypes.string,
    setMessageError : PropTypes.func
};

export default MainSection