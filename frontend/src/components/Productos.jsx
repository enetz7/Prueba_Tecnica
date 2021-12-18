import { useEffect, useState } from "react";
import axios from "axios";
import Producto from "./Producto";

function Productos() {
  const [listaProductos, setListaProductos] = useState([]);

  //Funcion para ver todos los productos que se encuentran en la base de datos
  async function cogerProductos() {
    await axios({
      method: "get",
      url: "http://127.0.0.1:5000/verProductos",
    }).then((response) => {
      var lista = [];
      response.data.map((datos, index) => {
        lista.push(
          <Producto imagen={datos.Imagen} nombre={datos.Nombre}></Producto>
        );
      });
      setListaProductos(lista);
    });
  }

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        await cogerProductos();
      })();
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  //Todos los productos
  return (
    <div class="w-6/12 mx-auto m-5 grid grid-cols-5 gap-5">
      {listaProductos}
    </div>
  );
}

export default Productos;
