import React from "react";
import { Link } from "react-router-dom";
import { currencyFormat } from "../../utils/currencyFormat";
import { splitDate } from "../../utils/splitDate";
import "./CardDetail.scss";

const CardDetail = ({ item }) => {
  return (
    <div className="detail-wrapper">
      <div className="card-id">
        <div className="right-wrapper">ID TRANSAKSI:#{item.id}</div>
        <div className="left-wrapper">
          <div className={`box-status ${item.status.toLowerCase()}`}>
            {item.status === "SUCCESS" ? "Berhasil" : "Pengecekan"}
          </div>
        </div>
      </div>
      <div className="card-id">
        <div className="right-wrapper detail">
          <i class="fas fa-inbox" />
        </div>
        <div className="left-wrapper detail">
          <div className="group-wrapper">
            <h4>PENGIRIM</h4>
            <p>{item.sender_bank.toUpperCase()}</p>
          </div>
          <div className="group-wrapper">
            <h4>PENERIMA</h4>
            <p>{item.beneficiary_bank.toUpperCase()}</p>
            <p>{item.account_number}</p>
            <p>{item.beneficiary_name}</p>
          </div>
          <div className="group-wrapper">
            <h4>NOMINAL</h4>
            <p>Rp. {currencyFormat(item.amount)}</p>
            <p>
              <span className="uniq-code">Kode Unik:</span> {item.unique_code}
            </p>
          </div>
          <div className="group-wrapper">
            <h4>CATATAN</h4>
            <p>{item.remark}</p>
          </div>
          <div className="group-wrapper">
            <h4>WAKTU DIBUAT</h4>
            <p>{splitDate(item.created_at).full}</p>
          </div>
        </div>
      </div>
      <div className="wrap-link">
        <Link to={"/"} className="link-back">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default CardDetail;
