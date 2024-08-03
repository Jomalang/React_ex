import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import { MdDelete } from "react-icons/md";
class ExpenseList extends Component {
  render() {
    return (
      <div className="list-container">
        <ul className="list">
          {this.props.initialExpenses.map((expense) => {
            return (
              <ExpenseItem
                expense={expense}
                key={expense.id}
                handleDelete={this.props.handleDelete}
              />
            );
          })}
        </ul>
        <button className="btn">
          목록 지우기<MdDelete className="btn-icon"></MdDelete>
        </button>
      </div>
    );
  }
}

export default ExpenseList;
