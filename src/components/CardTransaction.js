import React from "react";

const CardTransaction = ({ item }) => {
  return (
    <div className="card-transaction">
      <p>{item.id}</p>
      <p>{item.amount}</p>
    </div>
  );
};

export default CardTransaction;
