import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

// con lo siguiente, este archivo se convertira en un componente principal que exportara todos nuestros reducers
// a esta funcion le pasamos un objeto con todas las funciones reductoras que tenemos
// el primer cartReducer es una propiedad que estamos creando (en nuestro nuevo objeto)
export default combineReducers({
  cartReducer: cartReducer,
});
