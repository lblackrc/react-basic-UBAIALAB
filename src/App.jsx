import "./App.css";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

const App = () => {
  return (
    <div className="App container">
      <BrowserRouter>
        <EcommerceProvider>
          {/* ponemos dentro del provider todos los consumidores para que puedan usar sus datos. El provider enviara el listado de productos (products) a sus children */}
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route exact path="/productos">
              <ProductsContainer />
            </Route>
            <Route path="/productos/:busqueda">
              <ProductsContainer />
            </Route>
          </Switch>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
