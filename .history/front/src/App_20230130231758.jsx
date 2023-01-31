import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnexionInscription from "./pages/ConnexionInscription";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Messages from "./pages/Messages";
import Account from "./pages/Account";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Prix from "./pages/EtapesInscription/Prix";
import Jobs from "./pages/EtapesInscription/Jobs";
import Layout from "./pages/Layout";
import { Directus } from "@directus/sdk";

export const DirectusContext = createContext();
const directus = new Directus();

const App = () => {
  return (
    <BrowserRouter>
      <DirectusContext.Provider value={directus}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/connexioninscription" element={<ConnexionInscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/prix" element={<Prix />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </DirectusContext.Provider>
    </BrowserRouter>
  );
};

export default App;
