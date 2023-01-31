import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnexionInscription from "./pages/ConnexionInscription";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Messages from "./pages/Messages";
import Account from "./pages/Account";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import LayoutFull from "./pages/LayoutFull";
import LayoutHeader from "./pages/LayoutHeader";
import { Directus } from "@directus/sdk";
import { useState } from "react";
import Conversation from "./pages/Conversation";

export const DirectusContext = createContext();
const directus = new Directus();

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({ connected: false });

  return (
    <BrowserRouter>
      <DirectusContext.Provider value={directus}>
        <UserContext.Provider value={{ user, actions: { setUser } }}>
          <Routes>
            <Route element={<LayoutFull />}>
              <Route path="/likes" element={<Likes />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/conv" element={<Conversation />} />
              <Route path="/account" element={<Account />} />
              <Route index element={<Home />} />
            </Route>
          </Routes>
          <Routes>
            <Route element={<LayoutHeader />}>
              <Route path="/connexion" element={<Connexion />} />
              <Route path="/inscription" element={<Inscription />} />
            </Route>
            <Route
              path="/connexioninscription"
              element={<ConnexionInscription />}
            />
          </Routes>
        </UserContext.Provider>
      </DirectusContext.Provider>
    </BrowserRouter>
  );
};

export default App;
