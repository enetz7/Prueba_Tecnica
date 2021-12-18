import { Route, Routes } from "react-router-dom";
import "./App.css";
import Formulario from "./components/Formulario";
import Productos from "./components/Productos";

function App() {
  //Enrutador donde se muestran todas las vistas
  return (
    <div>
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;
