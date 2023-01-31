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
        <p>Les corps de métiers sélectionnés pour votre projet</p>
        <p></p>
        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
      </section>
    </main>
    </>
  );
};

export default Account;