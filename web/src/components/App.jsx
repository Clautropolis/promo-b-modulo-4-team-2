import { useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Api from "../services/api.js";
import { useEffect } from "react";

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
  const [messageError, setMessageError] = useState ('');
  const [listProjects, setListProjects] = useState([]);
  
//asignar valor a la variable para renderizar en el preview con set
  const changeData = (key, value) => {
    setDataCard({...dataCard, [key]: value})
  }
  
  const getFileImage = (id, urlImage) => {
    setDataCard({...dataCard, [id]: urlImage})
  }

//petición a la API
useEffect (()=>{
  Api().then(data => setListProjects(data.data))
}, [])

  return (
<>
<div className="container">

  <Header />
  <Routes>
    <Route path="/landing" element={<Landing dataCard={dataCard} listProjects ={listProjects} setListProjects={setListProjects}/> }/>

    <Route path="/" element={<MainSection dataCard={dataCard} changeData={changeData} getFileImage={getFileImage} setUrlDataCard={setUrlDataCard} urlDataCard={urlDataCard} messageError={messageError} setMessageError={setMessageError}/>}/>

  </Routes>

  

  <Footer/>
</div>
</>
)
}

export default App
