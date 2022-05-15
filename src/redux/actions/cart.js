// aqui creamos las funciones para los carts
// esta funcion va a retornar el Type de PUSH NEW PRODUCT y el payload del producto
// cada vez que se ejecute el addElementToCart, ejecutara el tipo de accion PUSH NEW PRODUCT. Y ese tipo de accion ejecutara el cartReducer (acuerdate del switch) y va a retornar el state
// el payload son los valores que queremos pasar
// el producto sale del boton que nosotros tocamos al agregar al carrito
export const addElemenToCart = (product) => {
  return {
    type: "PUSH NEW PRODUCT",
    payload: product,
  };
};
