import React from "react";

const Account = () => {
  return (
    <>
    <main className="user__account">
      <header className="account__header">
        <h1>Bienvenue sur votre profil !</h1>
        <p>hackathon@buildr.fr</p>
      </header>
      <section className="user__project">
        <section className="project__categories">
          <p className="categories__label">Les corps de métiers sélectionnés</p>
          <ul className="categories__list">
            <li className="category">
              <figure>
                <img src="https://picsum.photos/200" alt="corps de métier" />
                <figcaption>Plombier</figcaption>
              </figure>
            </li>
            <li className="category">
              <figure>
                <img src="https://picsum.photos/200" alt="corps de métier" />
                <figcaption>Électricien</figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section className="project__price">
          <p className="price__label">Budget moyen du projet</p>
          <p className="price__amount">500 - 1000€</p>
        </section>
       
        
      </section>
    </main>
    </>
  );
};

export default Account;