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
        <section className="project__categories"></section>
        <p>Les corps de métiers sélectionnés pour votre projet</p>
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
    </main>
    </>
  );
};

export default Account;