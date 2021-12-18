import axios from "axios";
import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [peso, setPeso] = useState("");
  const [imagen, setImagen] = useState("");
  const [nIdentificador, setnIdentificador] = useState("");

  //Funcion para añadir el producto a la base de datos
  async function añadirProducto() {
    await axios({
      method: "POST",
      url: "http://127.0.0.1:5000/agregarProducto",
      data: {
        Peso: peso,
        Nombre: nombre,
        Imagen: imagen,
        Identificador: nIdentificador,
      },
    });
  }

  //Funcion para convertir la imagen en base64
  var openFile = function (file) {
    var input = file;

    var reader = new FileReader();
    reader.onload = function () {
      var dataURL = reader.result;
      setImagen(dataURL);
    };
    reader.readAsDataURL(input.files[0]);
  };
  //Formulario para introducir los datos del producto
  return (
    <div className="w-screen  mt-5">
      <div className="mx-auto flex flex-grow justify-center my-auto">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-nombre"
              >
                Nombre del producto
              </label>
              <input
                onChange={(valor) => setNombre(valor.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-nombre"
                type="text"
                placeholder="Mesa"
              />
            </div>
          </div>

          <div className="m-4">
            <label className="inline-block mb-2 text-gray-500">
              Imagen del producto
            </label>
            <div className="flex items-center justify-center w-full">
              {imagen === "" ? (
                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Sube una imagen
                    </p>
                  </div>
                  <input
                    type="file"
                    id="file-id"
                    onChange={() => {
                      openFile(document.getElementById("file-id"));
                    }}
                    className="opacity-0"
                  />
                </label>
              ) : (
                <img className="max-w-auto max-h-auto" src={imagen}></img>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-peso"
              >
                Peso del producto
              </label>
              <input
                onChange={(valor) => setPeso(valor.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-peso"
                type="text"
                placeholder="25 KG"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-identificador"
              >
                Numero de identificador del producto
              </label>
              <input
                onChange={(valor) => setnIdentificador(valor.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-identificador"
                type="text"
                placeholder="FFFFF1"
              />
            </div>
          </div>
          <button
            onClick={() => añadirProducto()}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
          >
            Añadir
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
