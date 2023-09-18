import React from "react";
import clsx from "clsx";
import "./index.scss";

interface PageLayoutProps {
  className: string;
  children: React.ReactNode;
}
export const PageLayout = (props: PageLayoutProps) => {
  const { className, children } = props;
  return (
    <>
      <main className={clsx("main", className)}>{children}</main>
    </>
  );
};
