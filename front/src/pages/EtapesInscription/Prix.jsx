import React from "react";

const Prix = () => {
  return (
    <>
      <header className="inscription__header">
        <button className="header__back"></button>
        <h1 className="header__title">Budget</h1>
        <h2 className="header__subtitle">
          Sélectionnez le budget que vous souhaitez accorder à votre projet.
        </h2>
      </header>
      <main className="budget">
        <ul className="budget__list">
          <li className="budget__item">
            <button className="btn btn--border">500€ en -</button>
          </li>
          <li className="budget__item">
            <button className="btn btn--border" data-toggle="true">
              Entre 500€ et 1000€
            </button>
          </li>
          <li className="budget__item">
            <button className="btn btn--border">Entre 1000€ et 2000€</button>
          </li>
          <li className="budget__item">
            <button className="btn btn--border">2000€ et +</button>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Prix;
