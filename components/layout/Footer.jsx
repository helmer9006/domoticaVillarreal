import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#333" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <p className="text-anton">Domótica Villarreal</p>
            <hr className="hr mx-auto bg-primary" />
          </section>
        </div>
       
        <div
          className="text-center text-light p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright - Helmer Villarreal
        </div>
      </footer>
    </>
  );
};

export default Footer;
