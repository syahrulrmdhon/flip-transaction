import axios from "axios";

export const getListHome = () => async (dispatch) => {
  try {
    dispatch({
      type: "TRANSACTION_LIST_LOADING",
    });
    const res = await axios.get(
      `https://nextar.flip.id/frontend-test`
    );

    dispatch({
      type: "TRANSACTION_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "TRANSACTION_LIST_FAIL",
    });
  }
};
