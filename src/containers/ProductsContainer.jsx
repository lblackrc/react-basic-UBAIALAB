import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import InfoBarComponent from "../components/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  // definimos dos estados: carrito y products
  const { products, carrito, setCarrito, fetchData, setProducts } =
    useContext(EcommerceContext); // usamos un hook de estado. Empezamos con un carrito vacio []
  //   const carrito = []; // deberiamos llenar el carrito por cada vez que se haga click en el boton
  // const [products, setProducts] = useState([]); // debemos de inicializarlo vacio ya que vamos a simular que estamos trayendo datos de una BD o de una API
  // setProducts([{id: 1, name: "shoes"}]) // llamar aqui a la funcion setProducts, haria que se genere un bucle infinito, ya que el componente se renderiza cada vez que cambia el estado, y al renderizarse, nuevamente se llama a esta funcion. Por eso podriamos usar un useEffect para poder detectar cuando se esta por crear el componente
  // el useEffect es el hook que se ejecuta antes que el componente se cree
  // para poder usar un contexto debes usar un hook llamado useContext
  const { busqueda } = useParams();
  useEffect(() => {
    // esta funcion se utiliza para cuando se esta por montar un componente, pero se esta por crear
    // Aqui podriamos hacer la llamada a una API, la API devolvera un jason o un array con elementos
    fetchData(busqueda);
    return () => {
      console.log("Se esta por morir el componente");
      // esto te serviria para que, si estas escuchando eventos de algo con un addEventListener, tienes que matar ese addEventListener, porque sino esos addEventListener se acumulan en memoria y estaran siempre escuchando el mismo evento. Aqui deberiamos de matar a ese escuchador de eventos
    };
  }, [busqueda]);

  // creamos una funcion dentro de nuestro componente. En realidad es un metodo
  const agregarAlCarrito = (event, product) => {
    // cada vez que se agregue algo aca se deberia agregar el objeto que realmente necesitamos
    // console.log(event);
    // alert(`Hola gatito ${name}`);
    carrito.push(product);
    setCarrito([...carrito]); // usamos la sintaxis de spread operator (con el tipo de dato array) para enviarle el carrito y actualizar su estado (aqui carrito cambia su state y se vuelve a renderizar el componente con los nuevos valores del carrito)
    console.log("Estos son los productos del carrito:");
    console.log(carrito);
  };

  // cada vez que se presione una tecla ejecutamos la sgte funcion
  const handleKeyUp = (e) => {
    console.log(e.target.value);

    const productsFilter = products.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
        return true;
      }
      return false;
    });
    // cuando termine de filtrar, solo mostramos los productos que se filtraron
    setProducts(productsFilter);
    console.log(productsFilter);
  };

  console.log("Se esta por renderizar");
  console.log(carrito);

  return (
    <div className="container bg-warning">
      <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />
      <div className="row px-2 py-2">
        {products.map((element, index) => {
          // si products no tiene nigun valor esto no se deberia ejecutar
          return (
            <span key={element.id} className="col-4">
              {/* o en su defecto podriamos utilizar el index que viene con el map */}
              <CardComponent
                product={element}
                agregarAlCarrito={agregarAlCarrito} // aqui podriamos pasar el nombre del producto que estamos agregando
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

// necesitamos exportar el componente para poder usarlo
export default ProductsContainer;
