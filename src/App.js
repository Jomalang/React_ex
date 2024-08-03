import { Component } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseItem from "./component/ExpenseItem";
import ExpenseList from "./component/ExpenseList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: "점심값", amount: 12000 },
        { id: 2, charge: "교통비", amount: 1500 },
        { id: 3, charge: "커피값", amount: 1400 },
      ],
    };
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter((expense) => {
      return expense.id !== id;
    });
    console.log(newExpenses);
    this.setState({ expenses: newExpenses });
  };

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{ width: "100%", background: "white", padding: "1rem" }}>
          <ExpenseForm />
        </div>
        <div style={{ width: "100%", background: "white", padding: "1rem" }}>
          <ExpenseList
            initialExpenses={this.state.expenses}
            handleDelete={this.handleDelete}
          />
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
  }
}

export default App;
