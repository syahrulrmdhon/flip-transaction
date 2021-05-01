import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListHome } from "../actions/listHomeAction";
import CardTransaction from "../components/CardTransaction/CardTransaction";
import { currencyFormat } from "../utils/currencyFormat";
import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const homeList = useSelector((state) => state.listHome);

  const fetchHome = (page) => {
    dispatch(getListHome(page));
  };

  useEffect(() => {
    fetchHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let totalAmount = 0;
  if (homeList && homeList.data && homeList.data.length > 0) {
    totalAmount = homeList.data
      .map((item) => item.amount)
      .reduce((prev, next) => prev + next);
  }

  return (
    <React.Fragment>
      <h1>Daftar Transaksi</h1>
      <div className="wrapper-hello">
        <h2>Halo kak!</h2>
        <p>
          Kamu telah melakukan transaksi sebesar{" "}
          <span className="amount-total">
            Rp. {currencyFormat(totalAmount)}
          </span>{" "}
          sejak menggunakan Flip.
        </p>
      </div>
      <div className="search-wrapper">
        <i class="fas fa-search" />
        <input
          type="text"
          placeholder="search"
          name="search"
          className="search"
        />
        <select className="filter">
          <option value="">Urutkan</option>
          <option value="asc">Nama A-Z</option>
          <option value="desc">Nama Z-A</option>
        </select>
      </div>
      {homeList &&
        homeList.data &&
        homeList.data.length > 0 &&
        homeList.data.map((item) => (
          <CardTransaction key={item.id} item={item} />
        ))}
      {homeList && homeList.loading && <p>Loading....</p>}
    </React.Fragment>
  );
};

export default HomePage;
