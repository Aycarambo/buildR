import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Card from "../components/Card";
import yellowHeart from "../assets/images/yellow-heart.svg";
import btnClose from "../assets/images/btn-close-overlay.svg";

import { DirectusContext, UserContext } from "../App";

const Home = () => {
  const directusEntreprises = useContext(DirectusContext);
  const { user, actions } = useContext(UserContext);
  const { setUser } = actions;
  const [entreprises, setEntreprises] = useState([]);

  const [list, setList] = useState([]);

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
      const limiteEntreprises = entreprises.data.splice(0, 10);
      setEntreprises(limiteEntreprises);
    }
    fetchData();
  }, [user.searching_for_jobs, directusEntreprises]);

  const handleClick = (direction) => {
    const topElement = list.find((item) => !item.direction);
    setList(
      list.map((item) => (item === topElement ? { ...item, direction } : item))
    );
  };

  return (
    <>
      <main className="home">
        <div className="home__cards">
          {entreprises.map((entreprise, index) => {
            return <Card data={entreprise} key={index} />;
          })}
        </div>

        <div className="home__containerBtn">
          <button
            className="btnSwipe btnSwipe--declined"
            onClick={() => handleClick("left")}
          >
            <img src={btnClose} alt="" />
          </button>
          <button
            className="btnSwipe btnSwipe--accept"
            onClick={() => handleClick("right")}
          >
            <img src={yellowHeart} alt="" />
          </button>
        </div>
      </main>

      {!user.connected && <Navigate to="/connexioninscription" />}
    </>
  );
};

export default Home;
