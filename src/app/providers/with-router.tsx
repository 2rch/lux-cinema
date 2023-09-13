import React from "react";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (component: () => React.ReactNode) => {
  const Router = () => (
    <BrowserRouter>
      <Suspense fallback="">{component()}</Suspense>
    </BrowserRouter>
  );
  return Router;
};
