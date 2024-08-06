import { useState } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "점심값", amount: 12000 },
    { id: 2, charge: "교통비", amount: 1500 },
    { id: 3, charge: "커피값", amount: 1400 },
  ]);

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });
    console.log(newExpenses);
    setExpenses(newExpenses);
  };

  return (
    <main className="main-container">
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        <ExpenseForm />
      </div>
      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        <ExpenseList initialExpenses={expenses} handleDelete={handleDelete} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p className="main-total">
          총 지출 :<span> 원</span>
        </p>
      </div>
    </main>
  );
};

export default App;
