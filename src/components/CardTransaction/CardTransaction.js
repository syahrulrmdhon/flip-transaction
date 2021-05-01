import React from "react";
import { currencyFormat } from "../../utils/currencyFormat";
import { Link } from "react-router-dom";
import { splitDate } from "../../utils/splitDate";
import "./CardTransaction.scss";

const CardTransaction = ({ item }) => {
  return (
    <Link
      className={`card-transaction ${item.status.toLowerCase()}`}
      to={`/detail-transaction/${item.id}`}
    >
      <div className="right-wrapper">
        <p>
          {item.sender_bank.toUpperCase()}
          <i
            style={{ margin: "0 10px" }}
            className="fas fa-long-arrow-alt-right"
          ></i>
          {item.beneficiary_bank.toUpperCase()}
        </p>
        <p>{item.beneficiary_name}</p>
        <p>
          Rp. {currencyFormat(item.amount)}
          <span>
            <i
              style={{ margin: "0 7px", fontSize: "0.5em" }}
              className="fas fa-circle"
            ></i>
            {splitDate(item.completed_at).full}
          </span>
        </p>
      </div>
      <div className="left-wrapper">
        <div className={`box-status ${item.status.toLowerCase()}`}>
          {item.status === "SUCCESS" ? "Berhasil" : "Pengecekan"}
        </div>
      </div>
    </Link>
  );
};

export default CardTransaction;
