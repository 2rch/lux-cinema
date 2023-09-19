import React from "react";
import { withProviders } from "./providers";
import { Routing } from "./router";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(App);
