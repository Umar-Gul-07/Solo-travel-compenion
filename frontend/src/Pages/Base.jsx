import React from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";

function Base({ children }) {
  return (
    <>
    <div className="loader-wrapper">
  <div className="loader" />
  <div className="loder-section left-section" />
  <div className="loder-section right-section" />
</div>

        <Header />
        {children}
        <Footer />
      
    </>
  );
}

export default Base;
