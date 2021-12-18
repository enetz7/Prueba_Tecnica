import { useNavigate } from "react-router-dom";

//Botones que actuan como enrutador para cambiar de ventana
function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-screen p-6">
      <div className="mx-auto flex justify-center">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
          onClick={() => navigate("/")}
        >
          Productos
        </button>
        <button
          className="mx-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
          onClick={() => navigate("/formulario")}
        >
          Añadir Productos
        </button>
      </div>
    </div>
  );
}

export default Header;
