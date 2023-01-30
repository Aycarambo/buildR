import React from "react";
import starFill from "../assets/images/star-fill.svg";
import btnClose from "../assets/images/btn-close-overlay.svg";
import localisation from "../assets/images/localisation.svg";
import mail from "../assets/images/send-mail.svg";
import tel from "../assets/images/tel.svg";

const Card = () => {
  return (
    <article className="card">
      <figure className="card__content">
        <div className="card__slider">
          <img src="https://picsum.photos/400" alt="" />
        </div>
        <figcaption className="card__legende">
          <div className="card__info">
            <span>
              <div className="card__etoiles">
                <img src={starFill} alt="" />
                <img src={starFill} alt="" />
                <img src={starFill} alt="" />
                <img src={starFill} alt="" />
                <img src={starFill} alt="" />
              </div>
              <div className="card__prix">
                <span>€</span>
                <span>€</span>
                <span>€</span>
              </div>
            </span>  
            <h2 className="card__title">ABC Paysagiste</h2>
            <p className="card__ville"><img src={localisation} alt="" />Angers</p>
          </div>   
          <p className="card__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis, voluptas?
          </p>
          <button className="card__iconeI">i</button>
        </figcaption>
        
      </figure>

      <footer className="card__overlay">
        <button className="card__closeOverlay"><img src={btnClose} alt="" /></button>
        <div className="card__profil">
          <div className="card__legende card__legende--overlay">
            <div className="card__info">
              <span>
                <div className="card__etoiles">
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                  <img src={starFill} alt="" />
                </div>
                <div className="card__prix">
                  <span>€</span>
                  <span>€</span>
                  <span>€</span>
                </div>
              </span>  
              <h2 className="card__title">ABC Paysagiste</h2>
              <p className="card__ville"><img src={localisation} alt="" />Angers</p>
            </div>   
          </div>
          <img className="card__profilPic" src="https://picsum.photos/100" alt="" />
          <p className="card__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis, voluptas?
            </p>
        </div>
        <div className="card__tarifs card__section">
          <h3>Tarifs</h3>
          <div className="card__tarifsItem">
            <p>Lorem ipsum dolor sit amet </p>
            <span>1000€</span>
          </div>
          <div className="card__tarifsItem">
            <p>Lorem ipsum dolor sit amet</p>
            <span>1000€</span>
          </div>
        </div>
        <div className="card__metiers card__section">
          <h3>Métiers associés</h3>
          <div>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div> 
        <div className="card__contact card__section">
          <h3>Contact</h3>
          <div>
            <p className="card__mail"><img src={mail} alt="" />xyz@gmail.com</p>
            <p className="card__tel"><img src={tel} alt="" />+330000000000</p>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Card;
