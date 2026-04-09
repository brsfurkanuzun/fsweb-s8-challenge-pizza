import SiparisFormu from "./components/siparis-formu";
import AnaSayfa from "./components/anasayfa";
import SiparisOnay from "./components/siparis-onay";
import ScrollToTop from "./components/scroll-to-top";
import "./App.css";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HOME_PRODUCTS } from "./data/uiData";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(HOME_PRODUCTS[1]);
  const [siparisOzeti, setSiparisOzeti] = useState(null);
  const [apiYaniti, setApiYaniti] = useState(null);

  const handleSiparisTamamlandi = (ozet, yanit, history) => {
    setSiparisOzeti(ozet);
    setApiYaniti(yanit);
    history.push("/siparis-success");
  };

  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <AnaSayfa
              onSiparisBaslat={(product) => {
                const nextProduct = product || HOME_PRODUCTS[1];
                setSelectedProduct(nextProduct);
                history.push("/siparis", { selectedProduct: nextProduct });
              }}
            />
          )}
        />
        <Route
          exact
          path="/siparis"
          render={({ history, location }) => (
            <SiparisFormu
              selectedProduct={location.state?.selectedProduct || selectedProduct}
              onAnasayfa={() => history.push("/")}
              onSiparisTamamlandi={(ozet, yanit) =>
                handleSiparisTamamlandi(ozet, yanit, history)
              }
            />
          )}
        />
        <Route
          exact
          path="/siparis-success"
          render={({ history }) => (
            <SiparisOnay
              siparisOzeti={siparisOzeti}
              apiYaniti={apiYaniti}
              onYeniSiparis={() =>
                history.push("/siparis", { selectedProduct: selectedProduct })
              }
              onAnasayfa={() => history.push("/")}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
