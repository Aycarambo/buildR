import React from "react";
import Card from "../components/Card";
import yellowHeart from "../assets/images/yellow-heart.svg";
import btnClose from "../assets/images/btn-close-overlay.svg";

const Home = () => {
  return (<>
  <main className="home">
  <Card />
  <div className="home__containerBtn">
    <button className="btnSwipe btnSwipe--declined">
      <img src={btnClose} alt="" />
    </button>
    <button className="btnSwipe btnSwipe--accept">
      <img src={yellowHeart} alt="" />
    </button>
  </div>
  </main>

  </>
  );
};

export default Home;
