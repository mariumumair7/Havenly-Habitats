import React from "react";
import Heroblocks from "././components/heroblocks"
import Features from "././components/features";
import Products from "././components/productlisting";
import Popularproducts from "././components/popularproduct";
import Signup from "././components/signup";
import Features2 from "././components/features2";
import ProductCards from "././Products/page";
import Footer from "././components/footer";
import Header from "././components/header";
import "./globals.css"




export default function Home() {
  return (
    <div>
      <Header />
      <Heroblocks />
      <Features />
      <ProductCards />
      <Products />
      <Popularproducts />
      <Signup />
      <Features2 />
      <Footer />

    </div>
  );
}
