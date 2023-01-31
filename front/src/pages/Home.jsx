import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Card from "../components/Card";
import yellowHeart from "../assets/images/yellow-heart.svg";
import btnClose from "../assets/images/btn-close-overlay.svg";

import { DirectusContext, UserContext } from "../App";

const Home = () => {
  const directus = useContext(DirectusContext);
  const { user, actions } = useContext(UserContext);
  const { setUser } = actions;

  const directusEntreprises = directus.items("craftsmen");

  useEffect(() => {
    async function fetchData() {
      const entreprises = await directusEntreprises.readByQuery({
        fields: ["*.*.*"],
        jobs: {
          id: {
            _in: [...user.searching_for_jobs],
          },
        },
      });
      console.log(entreprises);
    }
    fetchData();
  }, [user.searching_for_jobs, directusEntreprises]);

  return (
    <>
      <main className="home">
        <div className="home__cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="home__containerBtn">
          <button className="btnSwipe btnSwipe--declined">
            <img src={btnClose} alt="" />
          </button>
          <button className="btnSwipe btnSwipe--accept">
            <img src={yellowHeart} alt="" />
          </button>
        </div>
      </main>

      {!user.connected && <Navigate to="/connexioninscription" />}
    </>
  );
};

export default Home;
