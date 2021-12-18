const Producto = ({ imagen, nombre }) => {
  //Componente para crear los productos que enseñaran en la vista de forma personalizada
  return (
    <div className="w-fit  py-4 px-12 bg-white shadow-lg rounded-lg ">
      <div className="flex items-center justify-center w-full">
        <img className="h-20" src={imagen}></img>
      </div>
      <label className="inline-block mb-2">{nombre}</label>
    </div>
  );
};

export default Producto;
