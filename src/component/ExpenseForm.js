import React, { Component } from "react";

export class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">지출 항목</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="예) 점심값"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">비용</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              placeholder="예) 12000"
            />
          </div>
        </div>
        <button type="submit" className="btn">
          확인
        </button>
      </form>
    );
  }
}

export default ExpenseForm;
