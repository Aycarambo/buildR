import React, { useState } from "react";
import imagecouvreur from "../../assets/images/couvreur.jpg";

const Recapitulatif = (props) => {
  const { changePage, inscriptionState, appendToState, handleRegister } = props;
  inscriptionState.categories.map((category) => {
    console.log(category);
  });

  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    appendToState({ description: description });
    console.log(inscriptionState);
    handleRegister();
  };

  return (
    <>
      <header className="inscription__header">
        <button className="header__back"></button>
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
        {description && (
          <ul className="connexion__choises">
            <li className="btn btn--yellow">
              <button onClick={() => handleSubmit()} className="btn__content">
                Valider
              </button>
            </li>
          </ul>
        )}
      </main>
    </>
  );
};

export default Recapitulatif;
