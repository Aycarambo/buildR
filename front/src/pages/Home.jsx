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

  const [list, setList] = useState([]);

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
          {list.map((item) => (
            <Card data={item} />
          ))}
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
