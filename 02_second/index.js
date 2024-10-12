import React from "react";
import ReactDom from "react-dom/client";
import Header from "./header/header";
import RestaurantBody from "./body/body";
import { Footer } from "./footer/footer";

const AppContainer = () => {
  return (
    <div>
      <Header />
      <RestaurantBody />
      <Footer></Footer>
    </div>
  );
};
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDom.createRoot(rootElement);
  root.render(<AppContainer />);
}
