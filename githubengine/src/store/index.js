import { createStore, action, thunk, debug } from "easy-peasy";

const productsModel = {
  items: {
    1: { id: 1, name: "Peas", price: 10 },
  },
};

// const basketModel = {
//   productIds: [1],
//   addProduct: action((state, payload) => {
//     state.productIds.push(payload);
//   }),
// };

// const storeModel = {
//   products: productsModel,
//   basket: basketModel,
// };

const searchModel = {
  searchedTerm: "",
  data: {
    items: [],
    incomplete_results: null,
    total_count: null,
  },
  errors: null,
  serverMessage: "",
  updateSearchedTerm: action((state, payload) => {
    state.searchedTerm = payload;
  }),
  callBackEnd: thunk(async (actions, payload, { getState }) => {
    const response = await fetch(`/searchGitHub/${payload}`);
    const result = await response.json();

    actions.updateSearchedTerm(payload);

    if (response.status !== 200) {
      actions.updateErrorMessage(result.message);
      throw Error(result.message);
    } else {
      actions.updateDataObject(result);
      actions.updateServerMessage(result.message);
    }
    return result;
  }),
  updateSearchedTerm: action((state, payload) => {
    state.searchedTerm = payload;
  }),
  updateDataObject: action((state, payload) => {
    state.data = payload.data;
    console.log(debug(payload));
  }),
  updateErrorMessage: action((state, payload) => {
    state.errors = payload;
  }),
  updateServerMessage: action((state, payload) => {
    state.serverMessage = payload;
  }),
};

const store = createStore(searchModel);

export default store;
