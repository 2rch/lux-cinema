import React from "react";
import clsx from "clsx";
import "./index.scss";
import { Header } from "../../header";
import { Footer } from "../../footer/ui";

interface PageLayoutProps {
  className: string;
  children: React.ReactNode;
}
export const PageLayout = (props: PageLayoutProps) => {
  const { className, children } = props;
  return (
    <>
      <main className={clsx("main", className)}>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
};
