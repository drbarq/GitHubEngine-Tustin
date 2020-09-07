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
  updateSearchedTerm: action((state, payload) => {
    state.searchedTerm = payload;
  }),
  callBackEnd: thunk(async (actions, payload, { getState }) => {
    const response = await fetch(`/searchGitHub/${payload}`);
    const body = await response.json();
    if (response.status !== 200) {
      actions.updateErrorMessage(body.message);
      throw Error(body.message);
    } else {
      actions.updateDataObject(body);
    }
  }),
  updateDataObject: action((state, payload) => {
    state.searchedTerm = payload.searchedTerm;
    state.data = payload.data;
    console.log(debug(payload));
  }),
  updateErrorMessage: action((state, payload) => {
    state.errors = payload;
  }),
};

const store = createStore(searchModel);

export default store;
