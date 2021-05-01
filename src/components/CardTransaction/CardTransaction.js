import React from "react";
import { currencyFormat } from "../../utils/currencyFormat";
import { Link } from "react-router-dom";
import "./CardTransaction.scss";

const CardTransaction = ({ item }) => {
  return (
    <Link className={`card-transaction ${item.status.toLowerCase()}`} to={`/detail-transaction/${item.id}`}>
      <div className="right-wrapper">
        <p>
          {item.sender_bank.toUpperCase()}
          <span
            style={{ fontSize: "0.8em", fontWeight: "800", margin: "0 10px" }}
          >
            &#8594;
          </span>
          {item.beneficiary_bank.toUpperCase()}
        </p>
        <p>Rp. {currencyFormat(item.amount)}</p>
        <p>{item.beneficiary_name}</p>
      </div>
      <div className="left-wrapper">
        <div className={`box-status ${item.status.toLowerCase()}`}>
          {item.status}
        </div>
      </div>
    </Link>
  );
};

export default CardTransaction;
