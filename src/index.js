//IMPORTS 
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

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

async function connectBD() {
  const conex = await mysql.createConnection({  //esta funcion me devuelve una promesa, por eso se le pone await 
      host: "sql.freedb.tech",
      user: "freedb_adminMel", 
      password: "uZd8??B6C5g4YEM",
      database: "freedb_firstProject2025",
  });
  conex.connect();
  return conex;   
}


//ENDPOINT
server.get("/projects/list", async (req, res)=>{

  try {

    const connection = await connectBD();
    const sqlSelect = "SELECT Projects.name, Projects.slogan, Projects.repo, Projects.demo, Projects.technologies, Projects.description AS `desc`, Projects.image, Projects.fk_author, Authors.name AS autor, Authors.job, Authors.photo   FROM Projects INNER JOIN Authors ON Projects.fk_author = Authors.idAuthor";
    const [result] = await connection.query(sqlSelect);
    connection.end();

    if(result.length === 0){
      res.status (404).json({
        success : false,
        data: "No se encontró ningún proyecto"
      });
    }else{

      res.status(200).json({
      success : true,
      data : result
      });
    }

  } catch (error) {
    res.status(500).json({
      success : false,
      data : error
    });
  }
  
});

//ENDPOINT POST
server.post("/project/add", async(req, res) => {
  try {
    const project = req.body;
    const connection = await connectBD();
    const insertAutor = "INSERT INTO Authors (name, job, photo) VALUES (?, ?, ?)";
    const insertProject = "INSERT INTO Projects (name, slogan, repo, demo, technologies, description, image, fk_author) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const [resultAutor] = await connection.query(insertAutor, [project.autor, project.job, project.photo]);
    const [resultProject] = await connection.query(insertProject, [project.name, project.slogan, project.repo, project.demo, project.technologies, project.desc, project.image, resultAutor.insertId]);

    connection.end();

    if(resultProject.length === 0 && resultAutor.length === 0){
      res.status (404).json({
          success: false,
          data: "No se ha añadido ningún dato a la base de datos"
      });
    }else{

      res.status(200).json({
      success : true,
      data : "Proyecto creado con éxito"
      //Aquí el servidor me devuelve una url que es la que nos lleva a la preview, pero todavia no funciona. Eso mañana.
      //urlDataCard : `http://localhost:5005/${resultProject.insertId}
      
      });
    }

  } catch (error) {
    res.status(500).json({
      success : false,
      data : error
    });
  }
})

//PUERTO
const PORT = 5005;
server.listen(PORT, ()=>{
  console.log(`Servidor corriendo por http://localhost:${PORT}`);
})

//SERVIDOR ESTÁTICOS
const urlServerStatic = "./src/public"; //siempre empieza en la carpeta raíz
server.use(express.static(urlServerStatic));

