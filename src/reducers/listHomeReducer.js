const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  dataDetail: {},
  param: "",
  dataSearch: [],
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
        data: Object.values(action.payload),
        errorMsg: "",
      };
    case "DETAIL_TRANSACTION":
      return {
        ...state,
        loading: false,
        data: state.data,
        dataDetail: state.data.filter((obj) => obj.id === action.id),
      };
    case "SEARCH_TRANSACTION":
      return {
        ...state,
        loading: false,
        param: action.param,
        data: state.data,
        dataSearch: action.param !== "" ? state.data.filter(
          value => {
            const searchStr = action.param.toLowerCase();
            const nameMatches = value.beneficiary_name.toLowerCase().includes(searchStr);
            const beneficaryBankMatches = value.beneficiary_bank.toLowerCase().includes(searchStr);
            const senderBankMathes = value.sender_bank.toLowerCase().includes(searchStr);
      
            return nameMatches || beneficaryBankMatches || senderBankMathes;
          }
        ) : [],
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default listHomeReducer;
