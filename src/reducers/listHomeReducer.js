const defaultState = {
    loading: false,
    data: [],
    errorMsg: "",
  };
  
  const listHomeReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "TRANSACTION_LIST_LOADING":
        return {
          ...state,
          loading: true,
        };
      case "TRANSACTION_LIST_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "Unable to get the List",
        };
      case "TRANSACTION_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          errorMsg: "",
        };
      default:
        return state;
    }
  };
  
  export default listHomeReducer;
  