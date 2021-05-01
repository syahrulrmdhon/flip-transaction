import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailTransaction } from "../actions/listHomeAction";
import CardDetail from "../components/CardDetail/CardDetail";

const DetailTransaction = ({ match }) => {
  const { params } = match;
  const dispatch = useDispatch();
  const dataDetail = useSelector((state) => state.listHome.dataDetail);

  const getDetail = (id) => {
    dispatch(getDetailTransaction(id));
  };

  useEffect(() => {
    getDetail(params.idTransaction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <h1>Detail Transaksi</h1>
      {dataDetail && dataDetail.length > 0 && (
        <CardDetail item={dataDetail[0]} />
      )}
    </React.Fragment>
  );
};

export default DetailTransaction;
