import React, { useState, useEffect } from "react";

const EmailEtMdp = (props) => {
  const { appendToState, changePage } = props;

  const [isValue, setisValue] = useState(false);

  const [dataConnexion, setDataConnexion] = useState({
    email: "",
    pwd: "",
  });

  useEffect(() => {
    checkIfValued();
  }, [dataConnexion]);

  const handleEmailChange = (e) => {
    setDataConnexion({
      ...dataConnexion,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setDataConnexion({
      ...dataConnexion,
      pwd: e.target.value,
    });
  };

  const checkIfValued = () => {
    if (dataConnexion.email !== "" && dataConnexion.pwd !== "") {
      setisValue(true);
    } else {
      setisValue(false);
    }
  };

  const handleClick = () => {
    appendToState(dataConnexion);
    changePage(2);
  };

  return (
    <section>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={dataConnexion.email}
        onChange={(e) => handleEmailChange(e)}
      ></input>
      <label htmlFor="pwd">Mot de passe</label>
      <input
        type="password"
        name="pwd"
        id="pwd"
        onChange={(e) => handlePasswordChange(e)}
      ></input>

      {isValue && (
        <button
          onClick={() => {
            handleClick();
          }}
        >
          étape suivante
        </button>
      )}
    </section>
  );
};

export default EmailEtMdp;
