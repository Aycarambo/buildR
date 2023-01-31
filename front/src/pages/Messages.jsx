import React from "react";
import picture_companyUrl from "../assets/images/picture_company.png";

const Messages = () => {
  return (<section className="wrapper-card">
    <figure className="card-message">
      <div className="card-message__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-message__content">
        <header className="card-message__header">
          <h2 className="card-message__title">Jacques Martin</h2>
          <p className="card-message__time">1 min</p>
        </header>
        <p className="card-message__extract">Bonjour merci pour votre confiance à demain pour les débuts des travaux<span className="card-message__three-points">...</span></p>
      </figcaption>
    </figure>
    <figure className="card-message">
      <div className="card-message__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-message__content">
        <header className="card-message__header">
          <h2 className="card-message__title">Jacques Martin</h2>
          <p className="card-message__time">1 min</p>
        </header>
        <p className="card-message__extract">Bonjour merci pour votre confiance à demain pour les débuts des travaux<span className="card-message__three-points">...</span></p>
      </figcaption>
    </figure>
    <figure className="card-message">
      <div className="card-message__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-message__content">
        <header className="card-message__header">
          <h2 className="card-message__title">Jacques Martin</h2>
          <p className="card-message__time">1 min</p>
        </header>
        <p className="card-message__extract">Bonjour merci pour votre confiance à demain pour les débuts des travaux<span className="card-message__three-points">...</span></p>
      </figcaption>
    </figure>
    <figure className="card-message">
      <div className="card-message__container-image">
        <img src={picture_companyUrl} alt="vignette de l'entreprise" className="card-like__image" /></div>
      <figcaption className="card-message__content">
        <header className="card-message__header">
          <h2 className="card-message__title">Jacques Martin</h2>
          <p className="card-message__time">1 min</p>
        </header>
        <p className="card-message__extract">Bonjour merci pour votre confiance à demain pour les débuts des travaux<span className="card-message__three-points">...</span></p>
      </figcaption>
    </figure>
  </section>);
};

export default Messages;
