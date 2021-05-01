const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  dataDetail: {},
  param: "",
  sort: "",
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
      const searchData = (param) => {
        const arrayToSort =
          state.dataSearch && state.dataSearch.length > 0
            ? state.dataSearch
            : state.data;
        return arrayToSort.filter((value) => {
          const searchStr = param.toLowerCase();
          const nameMatches = value.beneficiary_name
            .toLowerCase()
            .includes(searchStr);
          const beneficaryBankMatches = value.beneficiary_bank
            .toLowerCase()
            .includes(searchStr);
          const senderBankMathes = value.sender_bank
            .toLowerCase()
            .includes(searchStr);

          return nameMatches || beneficaryBankMatches || senderBankMathes;
        });
      };
      return {
        ...state,
        loading: false,
        param: action.param,
        data: state.data,
        dataSearch: action.param !== "" ? searchData(action.param) : [],
        errorMsg: "",
      };
    case "SORT_TRANSACTION":
      const sortDataBy = (param) => {
        const arrayToSort =
          state.dataSearch && state.dataSearch.length > 0
            ? state.dataSearch
            : state.data;
        if (param === "desc") {
          return arrayToSort.sort((a, b) =>
            b.beneficiary_name.localeCompare(a.beneficiary_name)
          );
        } else if (param === "newest") {
          return arrayToSort.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
        } else if (param === "oldest") {
          return arrayToSort.sort(
            (a, b) => new Date(a.created_at) - new Date(b.created_at)
          );
        }
        return arrayToSort.sort((a, b) =>
          a.beneficiary_name.localeCompare(b.beneficiary_name)
        );
      };
      console.log(sortDataBy(action.param));
      return {
        ...state,
        loading: false,
        sort: action.param,
        data: state.data,
        dataSearch: action.param !== "" ? sortDataBy(action.param) : [],
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default listHomeReducer;
