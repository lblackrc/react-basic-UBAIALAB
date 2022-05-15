// usamos desestructuracion para recibir los props
const CardComponent = ({ product, agregarAlCarrito }) => {
  return (
    <div className="card h-100">
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {product.title} - <b>$ {product.price}</b>
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {/* si llamas a la funcion con () se ejecutara cuando el componente se renderice, lo cual no tiene sentido ya que quieres que se ejecute solo cuando ocurre el evento */}
        <button
          className="btn btn-primary"
          onClick={(event) => {
            agregarAlCarrito(event, product);
          }}
        >
          {product.resultado}. Agregar al carrito
        </button>
      </div>
    </div>
  );
};

// necesitamos exportar el componente para poder usarlo
export default CardComponent;
