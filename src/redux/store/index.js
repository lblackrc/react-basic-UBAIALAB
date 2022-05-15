// este sera el encargado de la comunicacion de los estados con la UI
import { createStore } from "@reduxjs/toolkit";
// aca va a ir un poco de logica (hara las importaciones y combinaciones de las cosas)
// para hacer que nuestro store pueda funcionar tambien debemos de utilizar proveedores
import Reducers from "../reducers/index"; // aunque no exista "Reducers", react entiende que es eso que se exporto por default
export const Store = createStore(Reducers);
