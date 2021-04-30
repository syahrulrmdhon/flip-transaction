import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListHome } from "../actions/listHomeAction";
import CardTransaction from "../components/CardTransaction";

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

  return (
    <React.Fragment>
      <h1>Daftar Transaksi</h1>
      <h2>Halo kak!</h2>
      <p>
        Kamu telah melakukan transaksi sebesar{" "}
        <span className="amount-total">Rp. 5.000.000,-</span> sejak menggunakan
        Flip.
      </p>
      {homeList &&
        homeList.data &&
        homeList.data.length > 0 &&
        homeList.data.map((item) => <CardTransaction item={item} />)}
      {homeList && homeList.loading && <p>Loading....</p>}
    </React.Fragment>
  );
};

export default HomePage;
