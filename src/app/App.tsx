import React from "react";
import { withProviders } from "./providers";
import { Routing } from "./router";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default withProviders(App);
