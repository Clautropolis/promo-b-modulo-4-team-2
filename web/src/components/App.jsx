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

  
//asignar valor a la variable para renderizar en el preview con set
  const changeData = (key, value) => {
    // dataCard[key] = nuevo valor
    // dataCard.name = value
    // dataCard[key] = value //key va a ser o name, o slogan...
    setDataCard({...dataCard, [key]: value})
    // if(key === 'name'){
    //       setDataCard({...dataCard, name : value});
    //     }else if(key === 'slogan'){
    //       setDataCard({...dataCard, slogan : value});
    //     }else if(key === 'repo'){
    //       setDataCard({...dataCard, repo : value});
    //     }else if(key === 'demo'){
    //       setDataCard({...dataCard, demo : value});
    //     }else if(key === 'technologies'){
    //       setDataCard({...dataCard, technologies : value});
    //     }else if(key === 'desc'){
    //       setDataCard({...dataCard, desc : value});
    //     }else if(key === 'autor'){
    //       setDataCard({...dataCard, autor : value});
    //     }else if(key === 'job'){
    //       setDataCard({...dataCard, job : value});
    //     }
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

    <Route path="/" element={<MainSection dataCard={dataCard} changeData={changeData} getFileImage={getFileImage} setUrlDataCard={setUrlDataCard} urlDataCard={urlDataCard}/>}/>

  </Routes>

  

  <Footer/>
</div>
</>
)
}

export default App
