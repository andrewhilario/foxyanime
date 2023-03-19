import { useState } from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Layout from "./pages/Layout";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
import Stream from "./pages/Stream";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Helmet>
          <title>FoxyAnime.</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="stream/:episodeId" element={<Stream />}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
