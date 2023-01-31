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
          <>
            <main className="authentification">
              <div className="authentification__email authentification__input">
                <input type="email" name="email" id="email" placeholder="Email" value={dataConnexion.email} onChange={(e) => handleEmailChange(e)}/>
              </div>
              <div className="authentification__password authentification__input">
                <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={(e) => handlePasswordChange(e)}/>
              </div>

              {isValue && (
                <button
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Étape suivante
                </button>
              )}
            </main>
          </>
  );
};

export default EmailEtMdp;


