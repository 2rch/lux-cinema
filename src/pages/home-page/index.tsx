import React from "react";
import "./index.css";
import { Header } from "../../shared/ui/header";
import { PageLayout } from "../../shared/ui/page-layout/ui";
import { Footer } from "../../shared/ui/footer/ui";
import { Carousel } from "../../shared/ui/carousel";

export const HomePage = () => {
  return (
    <PageLayout className={"home-page"}>
      <Header />
      <Carousel />
      <Footer />
    </PageLayout>
  );
};
