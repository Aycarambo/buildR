const Connexion = () => {
  return (
    <>
    <header className="inscription__header">
      <button className="header__back"></button>
      <h1 className="header__title">Connexion</h1>
      <h2 className="header__subtitle">
        Tu nous as manqué !
      </h2>
    </header>
    <main className="authentification">
      <input type="email" name="email" id="email"/>
      <input type="password" name="password" id="password"/>
      <button>Connexion</button>  
    </main>
    <aside className="authentification__other">
    
    </aside>
    </>
  );
};

export default Connexion;
