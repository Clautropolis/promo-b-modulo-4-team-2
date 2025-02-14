//IMPORTS *
const express = require("express");
const cors = require("cors");

//CREAR SERVIDOR *
const server = express();

//CONFIGURAR SERVIDOR *
server.use(cors());
const PORT = 5005;
server.listen(PORT, ()=>{
  console.log(`Servidor corriendo por http://localhost:${PORT}`);
})
//* se pueden reutilizar porque siempre es igual

//ENDPOINTS
//rutas endpoints --> API
//GET, POST, PUT, DELETE

// //obtener datos de una estudiante
// server.get("/student", (req, res)=>{
//   //buscar en la BD los datos de la estudiante y responder
//   const student = {
//     name : "anacleta",
//     lastname : "garcía"
//   };
//   res.json({
//     success: true,
//     result: student
//   });
// })

//El nombre de la ruta es inventado
//La función siempre tendrá un 'req' (requiest) y un 'res' (response)
//req -> solicitud que me hicieron (req.body si se envía desde el front)
//res -> respuesta que da el endpoint

//SERVIDOR ESTÁTICOS
const urlServerStatic = "./src/public"; //siempre empieza en la carpeta raíz
server.use(express.static(urlServerStatic));

