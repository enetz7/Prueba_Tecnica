module.exports = function (app) {
  const Producto = require("../models/producto");

      //Funcion para ver todos los productos de la base de datos
      lista= function (req,res){
        Producto.find(function(err,productos){
          res.send(productos);
        });
      };
      //Funcion para agregar el producto a la base de datos
      agregarProducto = function(req,res){
        var producto = new Producto({
          Nombre:req.body.Nombre,
          Imagen:req.body.Imagen,
          Peso:req.body.Peso,
          Identificador:req.body.Identificador,
        })
        producto.save();
        res.end();
      }

      
      app.get("/verProductos",lista);
      app.post("/agregarProducto", agregarProducto);
    };