import React from "react";
import clsx from "clsx";
import { Header } from "../../header";
import { Footer } from "../../footer";
import "./index.scss";

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
