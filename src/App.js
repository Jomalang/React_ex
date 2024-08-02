import { Component } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseItem from "./component/ExpenseItem";
import ExpenseList from "./component/ExpenseList";
class App extends Component {
  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{ width: "100%", background: "white", padding: "1rem" }}>
          <ExpenseForm />
        </div>
        <div style={{ width: "100%", background: "white", padding: "1rem" }}>
          <ExpenseList />
        </div>
        <div style={{ width: "100%", background: "white", padding: "1rem" }}>
          <ExpenseItem />
        </div>

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
        >
          <p>
            총 지출:
            <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}

export default App;
