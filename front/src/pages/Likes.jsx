import React from "react";
import picture_companyUrl from "../assets/images/picture_company.png";
import iconCrossUrl from "../assets/images/iconCross.svg";

const Likes = () => {
  return (<section className="wrapper-card">
    <figure className="card-like">
      <div className="card-like__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-like__content">
        <header className="card-like__header">
          <h2 className="card-like__title">Jacques Martin</h2>
          <img src={iconCrossUrl} alt="cross close" className="card-like__close" />
        </header>
        <div className="card-like__description">
          <p className="card-like__tel"><a className="card-like__link" href="tel:330000000000"></a>+330000000000</p>
          <p className="card-like__see-profil"><a className="card-like__link" href="">Voir le profil</a></p>
        </div>
      </figcaption></figure>
      <figure className="card-like">
      <div className="card-like__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-like__content">
        <header className="card-like__header">
          <h2 className="card-like__title">Jacques Martin</h2>
          <img src={iconCrossUrl} alt="cross close" className="card-like__close" />
        </header>
        <div className="card-like__description">
          <p className="card-like__tel"><a className="card-like__link" href="tel:330000000000"></a>+330000000000</p>
          <p className="card-like__see-profil"><a className="card-like__link" href="">Voir le profil</a></p>
        </div>
      </figcaption></figure>
      <figure className="card-like">
      <div className="card-like__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-like__content">
        <header className="card-like__header">
          <h2 className="card-like__title">Jacques Martin</h2>
          <img src={iconCrossUrl} alt="cross close" className="card-like__close" />
        </header>
        <div className="card-like__description">
          <p className="card-like__tel"><a className="card-like__link" href="tel:330000000000"></a>+330000000000</p>
          <p className="card-like__see-profil"><a className="card-like__link" href="">Voir le profil</a></p>
        </div>
      </figcaption></figure>
      <figure className="card-like">
      <div className="card-like__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-like__content">
        <header className="card-like__header">
          <h2 className="card-like__title">Jacques Martin</h2>
          <img src={iconCrossUrl} alt="cross close" className="card-like__close" />
        </header>
        <div className="card-like__description">
          <p className="card-like__tel"><a className="card-like__link" href="tel:330000000000"></a>+330000000000</p>
          <p className="card-like__see-profil"><a className="card-like__link" href="">Voir le profil</a></p>
        </div>
      </figcaption></figure>




  </section>);
};

export default Likes;
