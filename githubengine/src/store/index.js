import { createStore, action } from "easy-peasy";

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
  updateSearchedTerm: action((state, payload) => {
    state.searchedTerm = payload;
  }),
};

const store = createStore(searchModel);

export default store;
