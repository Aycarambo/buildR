import React from "react";
import sendMessage from "../assets/images/send-message.svg";

const Conversation = () => {
  return ( 
    <main className="conversation">
      <header className="conversation-header">
          <button className="conversation-header__btnBack">hjgfjhgf</button>
          <img className="conversation-header__img" src="https://picsum.photos/100" alt="" />
          <div className="conversation-header__content">
            <h2>Jacques Martin</h2>
            <span>En ligne</span>
          </div>
      </header>
      <section className="conversation-item">
        <p className="conversation-item__date">
          Hier 11h54
        </p>
        <p className="conversation-item__text conversation-item__text--artisan">
          Bonjour, je suis disponible à partir du 5 mars
        </p>
        <p className="conversation-item__text">
          D'accord, pas de soucis
        </p>
      </section>
      <section className="conversation-item">
        <p className="conversation-item__date">
          Aujourd'hui 12h12
        </p>
        <p className="conversation-item__text conversation-item__text--artisan">
          Je peux venir pour fixer un rdv dans l'après-midi dans les alentours de 16h
          </p>
        <p className="conversation-item__text conversation-item__text--artisan">
          J'attend votre confirmation
        </p>
        <p className="conversation-item__text">
          Je suis pas disponible aujourd'hui
        </p>
      </section>
      <aside className="conversation-message">
        <input type="text" name="" id="" placeholder="Ecrivez votre message ici..."/>
        <button type="submit"><img src={sendMessage} alt="" /></button>
      </aside>
    </main>
  );
};

export default Conversation;
