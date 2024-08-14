import { useState } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import Alert from "./component/Alert";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "점심값", amount: 12000 },
    { id: 2, charge: "교통비", amount: 1500 },
    { id: 3, charge: "커피값", amount: 1400 },
  ]);

  const [charge, setCharge] = useState("");

  const [id, setId] = useState("");

  const [amount, setAmount] = useState(0);

  const [alert, setAlert] = useState({ show: false });

  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //submit했을때 기본값은 입력하지 않는다.
    if (charge !== "" && amount > 0) {
      if (!edit) {
        //불변성을 지키기 위해 새 Expenses를 생성한다.
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        //생성한 newExpense를 스프레드 문법 이용해 추가한다.
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        setCharge("");
        setAmount(0);
        handleAlert({ type: "success", text: "등록되었습니다." });
      } else {
        const newExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "수정되었습니다." });
        setCharge("");
        setAmount(0);
      }
    } else {
      console.log("error");
      handleAlert({ type: "danger", text: "올바르지 않은 값입니다." });
    }
  };

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  };

  const clearItems = () => {
    setExpenses([]);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => {
      return expense.id !== id;
    });
    console.log(newExpenses);
    setExpenses(newExpenses);
    handleAlert({ type: "danger", text: "삭제되었습니다." });
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 5000);
  };

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);

    setEdit(true);
  };

  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
      <h1>예산 계산기</h1>
      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        <ExpenseForm
          handleCharge={handleCharge}
          charge={charge}
          handleAmount={handleAmount}
          amount={amount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
      </div>
      <div style={{ width: "100%", background: "white", padding: "1rem" }}>
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p className="main-total">
          총 지출 :
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}
            원
          </span>
        </p>
      </div>
    </main>
  );
};

export default App;
