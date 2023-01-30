import React from "react";

const EmailEtMdp = (props) => {
  const { appendToState, changePage } = props;
  const handleEmailChange = (e) => {
    appendToState({ email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    appendToState({ pwd: e.target.value });
  };

  return (
    <section>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => handleEmailChange(e)}
      ></input>
      <label htmlFor="pwd">Mot de passe</label>
      <input
        type="password"
        name="pwd"
        id="pwd"
        onChange={(e) => handlePasswordChange(e)}
      ></input>
      <button onClick={() => changePage(2)}>étape suivante</button>
    </section>
  );
};

export default EmailEtMdp;
