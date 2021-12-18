var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
  //Modelo de la tabla producto
var productoSchema = new Schema(
  {
    Nombre: String,
    Imagen: String,
    Peso:String,
    Identificador:String
  },
  { versionKey: false }
);

//Export the schema
module.exports = mongoose.model("Productos", productoSchema);