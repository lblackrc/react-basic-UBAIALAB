// funcion reductora que se encargara de trabajar sobre nuestro carrito
// uno de los parametros es el action, ya que segun la accion que recibamos, es la logica que vamos a hacer
// el estado la primera vez tiene un valor null. El carrito debe inicializarse con un array vacio
// con el INIT_STATE lo dejaremos como default si el state es null la primera vez que se carga
const INIT_STATE = {
  cart: [],
};
export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "PUSH NEW PRODUCT":
      // por el momento lo unico que queremos que retorne es el estado
      // una funcion reductora puede recibir una accion a la vez pero con millones de cases
      if (action.payload) {
        // aqui podriamos validar stock, validar oferta o cupon
        console.log("existe");
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
