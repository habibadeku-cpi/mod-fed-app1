import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";
import Home from "../components/Home";
import Remote1 from "../components/Remote1";
import Remote2 from "../components/Remote2";
import ErrorBoundary from "../components/ErrorBoundary";
import Contact from "../components/Contact";
import NavBar from "../components/Navbar";


const App = () => {
  // App2 will be injected in the div with parentElementId
  return (
    <div>
    <h1>Host Application - React Version {React.version}</h1>
    <ErrorBoundary>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/remote1/*" element={<Remote1 />} />
        <Route path="/remote2/*" element={<Remote2 />} />
      </Routes>
    </ErrorBoundary>
    </div>
  );
};

export default App;
