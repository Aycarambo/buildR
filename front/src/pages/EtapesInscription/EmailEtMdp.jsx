import React, { useEffect, useState } from "react";

const EmailEtMdp = (props) => {
  const { appendToState } = props;
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
        // value={email}
        onChange={(e) => handleEmailChange(e)}
      ></input>
      <label htmlFor="pwd">Mot de passe</label>
      <input
        type="password"
        name="pwd"
        id="pwd"
        // value={pwd}
        onChange={(e) => handlePasswordChange(e)}
      ></input>
      <button>étape suivante</button>
    </section>
  );
};

export default EmailEtMdp;
