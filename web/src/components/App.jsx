import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";

function App() {

  //Crear objeto de variables para pintar
  
  const [dataCard, setDataCard] = useState ({
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
  } 
);
  const [urlDataCard, setUrlDataCard] = useState ('');
  const [messageError, setMessageError] = useState ('')
  
//asignar valor a la variable para renderizar en el preview con set
  const changeData = (key, value) => {
    setDataCard({...dataCard, [key]: value})
  }
  
  const getFileImage = (id, urlImage) => {
    setDataCard({...dataCard, [id]: urlImage})
  }

  return (
<>
<div className="container">

  <Header />
  <Routes>
    <Route path="/landing" element={<Landing dataCard={dataCard}/> }/>

    <Route path="/" element={<MainSection dataCard={dataCard} changeData={changeData} getFileImage={getFileImage} setUrlDataCard={setUrlDataCard} urlDataCard={urlDataCard} messageError={messageError} setMessageError={setMessageError}/>}/>

  </Routes>

  

  <Footer/>
</div>
</>
)
}

export default App
