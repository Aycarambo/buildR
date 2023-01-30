import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnexionInscription from "./pages/ConnexionInscription";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Messages from "./pages/Messages";
import Account from "./pages/Account";
import Prix from "./pages/inscription/Prix";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/connexion" element={<ConnexionInscription />} />
        <Route path="/prix" element={<Prix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
