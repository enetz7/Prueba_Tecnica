var express = require("express");
var app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const url = "mongodb://mongodb/prueba_tecnica";
const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
const bodyParser = require("body-parser");
const PORT = 5000;
app.use(bodyParser.json());
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
//Iniciar el server en el puerto 5000
 app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})

  routes = require('./routes/router')(app);
  //Conexion con la base de datos
  mongoose.connect(url,connectionParams)
  .then( () => {
      console.log('Connected to database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
})