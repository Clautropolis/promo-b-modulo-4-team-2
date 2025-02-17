//IMPORTS 
const express = require("express");
const cors = require("cors");

//CREAR SERVIDOR 
const server = express();

//CONFIGURAR SERVIDOR 
server.use(cors());
server.use(express.json());

const proyects = [
  {
    name: 'El patio de Luisa',
    slogan: 'donde la música independiente encuentra su voz',
    repo: 'https://github.com/Clautropolis/promo-b-modulo-4-team-2.git',
    demo: 'https://adalab.es/',
    technologies: 'react, html, css, js, vite, node',
    desc: 'Leave hair everywhere fooled again thinking the dog likes me or make meme, make cute face dismember a mouse and then regurgitate parts of it on the family room floor or going to catch the red dot today going to catch the red dot today sitting in a box yet lay on arms while youre using the keyboard. Stand in front of the computer screen lick the curtain just to be annoying and meow meow you are my owner so here is a dead rat for grass smells good, munch, munch, chomp, chomp. I love cuddles hell is other people cat fur is the new black .',
    autor: 'Claudia',
    job: 'cuidadora de gatos',
    photo:'https://static.cegos.es/content/uploads/2023/03/01165224/GettyImages-1300321639.jpg',
    image:'https://www.mahoudrid.com/wp-content/uploads/2021/08/El-Patio-Mahou-Jardin.jpg'  
  },
  {
    name: 'El espacio exterior',
    slogan: 'hasta el infinito y más allá',
    repo: 'https://github.com/Clautropolis/promo-b-modulo-4-team-2.git',
    demo: 'https://adalab.es/',
    technologies: 'react, html, css, js, vite, node',
    desc: 'Leave hair everywhere fooled again thinking the dog likes me or make meme, make cute face dismember a mouse and then regurgitate parts of it on the family room floor or going to catch the red dot today going to catch the red dot today sitting in a box yet lay on arms while youre using the keyboard. Stand in front of the computer screen lick the curtain just to be annoying and meow meow you are my owner so here is a dead rat for grass smells good, munch, munch, chomp, chomp. I love cuddles hell is other people cat fur is the new black .',
    autor: 'Gemma',
    job: 'ceramista',
    photo:'https://st3.depositphotos.com/6462898/17953/i/600/depositphotos_179530926-stock-photo-passport-picture-asian-young-woman.jpg',
    image:'https://static.nationalgeographicla.com/files/styles/image_3200/public/01-edge-of-space-sts080-759-038_orig.jpg?w=1900&h=1900'  
  }
];

//ENDPOINT
server.get("/projects/list", (req, res)=>{
  res.status(200).json({
    succes : true,
    data : proyects
  });
});

//PUERTO
const PORT = 5005;
server.listen(PORT, ()=>{
  console.log(`Servidor corriendo por http://localhost:${PORT}`);
})

//SERVIDOR ESTÁTICOS
const urlServerStatic = "./src/public"; //siempre empieza en la carpeta raíz
server.use(express.static(urlServerStatic));

