import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConnexionInscription from "./pages/ConnexionInscription";
import Jobs from "./pages/inscription/Jobs";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<ConnexionInscription />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/connexion" element={<ConnexionInscription />} />
        <Route path="/choixcategories" element={<ChoixCategories />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
