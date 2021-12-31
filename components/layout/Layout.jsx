import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Domotica Villarreal</title>
      </Head>
      <NavBar />
      <div className="container p-4 ">{props.children}</div>
    </>
  );
};

export default Layout;
