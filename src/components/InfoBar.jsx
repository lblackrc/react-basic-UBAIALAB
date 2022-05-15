import { Link } from "react-router-dom";

// en este componente solo recibimos al carrito y retornamos la vista que nosotros queremos
const InfoBarComponent = ({ carrito, handleKeyUp }) => {
  return (
    <div className="bg-white py-4">
      <div>
        <input
          type="text"
          onInput={handleKeyUp}
          placeholder="Buscar por nombre"
        />
      </div>
      <button>
        <Link to={"/"}>Ir a la home</Link>
      </button>
      <br />
      Elementos en el carrito: {carrito.length}
    </div>
  );
};

export default InfoBarComponent;
