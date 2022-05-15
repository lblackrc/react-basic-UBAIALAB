import { createContext, useEffect, useState } from "react";

// comenzamos creando nuestro contexto
export const EcommerceContext = createContext();

// ahora creamos el componente que se va a encargar de retornar ese contexto
export const EcommerceProvider = ({ children }) => {
  // con children indicamos todos los componentes que van a ser consunmidores del proveedor
  // estos seran los estados que van a poder consumir los consumidores
  // para acceder al estado debemos utilizar la propiedad value y el objeto con todos los estados que queramos
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState([]);
  // indicamos que va a ser un provider

  // con esto tendremos los productos seteados con lo que seria nuestra API
  async function fetchData(searchQuery) {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`
    );
    const response = await data.json();
    setProducts(response.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <EcommerceContext.Provider
      value={{ products, carrito, setCarrito, fetchData, setProducts }}
    >
      {/* aqui ponemos todos los componentes hijos que van a ser consumidores del proveedor. Para ello debemos recibir el prop children. Todos los componentes que pasemos adentro de EcommerceProvider cuando lo llamemos van a poder consumir todos los estados de este componente */}
      {/* todos los componentes que pasemos dentro de EcommerceProvider se mandan aqui adentro y van a poder consumir todos los estados del componente EcommerceProvider. Para que tus children puedan consumir estados debemos enviarlo al proveedor como un value - en este caso enviamos el objeto products para que lo puedan recibir todos los children*/}
      {children}
    </EcommerceContext.Provider>
  );
};

// recuerda exportar el contexto y el proveedor
// podriamos utilizar un useEffect por ejemplo para traer valores de una API y setearlo como estado inicial y luego proveerlos
