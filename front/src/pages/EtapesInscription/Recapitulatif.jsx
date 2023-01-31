import React, { useState, useContext } from "react";

import { UserContext } from "../../App";

const Recapitulatif = (props) => {
  const { user } = useContext(UserContext);

  const { changePage, inscriptionState, appendToState, handleRegister } = props;

  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    appendToState({ description: description });
    handleRegister();
  };

  return (
    <>
      <header className="inscription__header">
        <button className="header__back" onClick={() => changePage(3)}></button>
        <h1 className="header__title">Récapitulatif</h1>
      </header>
      <main className="resume">
        <section className="resume__categories">
          <div className="categories__head">
            <h3 className="head__title">Catégories</h3>
            <a onClick={() => changePage(2)} className="head__link">
              Modifier
            </a>
          </div>
          <div className="categories__container">
            {inscriptionState.categories.map((category, index) => {
              return (
                <div key={index} className="container__card">
                  <img
                    src={"/assets/" + category.imageId + "?download"}
                    alt={category.label}
                    className="card__image"
                  />
                  <p className="card__text">{category.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="resume__budget">
          <div className="budget__head">
            <h3 className="head__title">Budget</h3>
            <a onClick={() => changePage(3)} className="head__link">
              Modifier
            </a>
          </div>
          <div className="budget__selection">
            <p className="selection__prix">
              {inscriptionState.budget.min && inscriptionState.budget.max && (
                <>
                  Entre {inscriptionState.budget.min}€ et{" "}
                  {inscriptionState.budget.max}€
                </>
              )}
              {!inscriptionState.budget.min && inscriptionState.budget.max && (
                <>{inscriptionState.budget.max}€ et -</>
              )}
              {inscriptionState.budget.min && !inscriptionState.budget.max && (
                <>{inscriptionState.budget.min}€ et +</>
              )}
            </p>
          </div>
        </section>

        <section className="resume__description">
          <div className="description__head">
            <h3 className="head__title">Description</h3>
          </div>
          <div className="description__container">
            <textarea
              className="description__textarea"
              name="description"
              placeholder="Je voudrais avoir un plombier pour reboucher ma petite fuite d'eau !"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        <ul className="connexion__choises">
          <li className="connexion__btn">
            <button
              onClick={() => handleSubmit()}
              className={
                description
                  ? "btn btn--yellow"
                  : "btn btn--yellow btn--notallowed"
              }
            >
              Valider
            </button>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Recapitulatif;
