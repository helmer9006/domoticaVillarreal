import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Domotica Villarreal</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/pulse/bootstrap.min.css"
          integrity="sha384-L7+YG8QLqGvxQGffJ6utDKFwmGwtLcCjtwvonVZR/Ba2VzhpMwBz51GaXnUsuYbj"
          crossorigin="anonymous"
        ></link>
      </Head>
      <NavBar />
      <div className="container p-4">{props.children}</div>
    </> 
  );
};

export default Layout;
