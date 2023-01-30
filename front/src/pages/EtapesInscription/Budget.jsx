import React, { useEffect, useState } from "react";

const budgets = [
  { min: null, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 2000 },
  { min: 2000, max: null },
];

const Budget = (props) => {
  const { appendToState, changePage } = props;
  const [budget, setBudget] = useState(budgets[0]);

  const handleBudgetChoice = (choice) => {
    setBudget(choice);
  };

  const handleSubmit = () => {
    appendToState(budget);
    changePage(4);
  };

  return (
    <>
      <header className="inscription__header">
        <button className="header__back"></button>
        <h1 className="header__title">Budget</h1>
        <h2 className="header__subtitle">
          Sélectionnez le budget que vous souhaitez accorder à votre projet.{" "}
        </h2>
      </header>
      <main className="budget">
        <ul className="budget__list">
          {budgets.map((budgetItem, idx) => {
            return (
              <li key={idx} className="budget__item">
                <button
                  onClick={() => handleBudgetChoice(budgetItem)}
                  className="btn btn--border"
                  data-toggle={budgetItem === budget}
                >
                  {budgetItem.min && budgetItem.max && (
                    <>
                      Entre {budgetItem.min}€ et {budgetItem.max}€
                    </>
                  )}
                  {!budgetItem.min && budgetItem.max && (
                    <>{budgetItem.max}€ et -</>
                  )}
                  {budgetItem.min && !budgetItem.max && (
                    <>{budgetItem.min}€ et +</>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => handleSubmit()} className="btn budget__btn">
          Suite
        </button>
      </main>
    </>
  );
};

export default Budget;
