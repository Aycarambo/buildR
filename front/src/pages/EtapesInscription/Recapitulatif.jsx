import React from "react";
import imagecouvreur from "../../assets/images/couvreur.jpg";

const Recapitulatif = () => {
  return (
<main className="resume">
    <section class="resume__categories">
        <div className="categories__head">
            <h3 className="head__title">Catégories</h3>
            <a href="#" className="head__link">Modifier</a>
        </div>
        <div className="categories__container">
            <div className="container__card">
                <img src={imagecouvreur} alt="" className="card__image"/>
                <p className="card__text">Couvreur</p>
            </div>
            <div className="container__card">
                <img src={imagecouvreur} alt="" className="card__image"/>
                <p className="card__text">Couvreur</p>
            </div>
            <div className="container__card">
                <img src={imagecouvreur} alt="" className="card__image"/>
                <p className="card__text">Couvreur</p>
            </div>
            <div className="container__card">
                <img src={imagecouvreur} alt="" className="card__image"/>
                <p className="card__text">Couvreur</p>
            </div>
        </div>
    </section>

    <section class="resume__budget">
        <div className="budget__head">
            <h3 className="head__title">Budget</h3>
            <a href="#" className="head__link">Modifier</a>
        </div>
        <div className="budget__selection">
            <p className="selection__prix">
            500 € ET -
            </p>
        </div>
    </section>

    <section class="resume__description">
        <div className="description__head">
            <h3 className="head__title">Description</h3>
            <a href="#" className="head__link">Modifier</a>
        </div>
        <div className="description__container">
        <textarea className="description__textarea" name="description" placeholder="Placer votre description..."></textarea>
        </div>
    </section>
        <ul className="connexion__choises">
          <li className="btn btn--yellow">
            <button className="btn__content">Valider</button>
          </li>
        </ul>
</main>



  );
};

export default Recapitulatif;
