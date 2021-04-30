import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListHome } from "../actions/listHomeAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const homeList = useSelector((state) => state.listHome);

  const fetchHome = (page) => {
    dispatch(getListHome(page));
  }

  useEffect(() => {
    fetchHome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <h1>Daftar Transaksi</h1>
      {homeList && homeList.data && (
        <p>have data</p>
      )}
      {homeList && homeList.loading && <p>Loading....</p>}
    </React.Fragment>
  );
};

export default HomePage;
