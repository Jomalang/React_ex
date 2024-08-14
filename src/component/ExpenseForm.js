import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  handleCharge,
  charge,
  handleAmount,
  amount,
  handleSubmit,
  edit,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">지출 항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예) 점심값"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="예) 12000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "수정" : "등록"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
