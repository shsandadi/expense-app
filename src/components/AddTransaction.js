import React from "react";

function AddTransaction() {
  return (
    <>
      <h3> Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Label</label>
          <input type="text" placeholder="Enter Label..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            (<b>-</b>/<b>+</b>) Amount &nbsp; &nbsp; [-expense,+income]
          </label>
          <input type="text" placeholder="Enter Amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
