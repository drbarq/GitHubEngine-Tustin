import { createStore, action, thunk } from "easy-peasy";

const searchModel = {
  searchedTerm: "",
  data: {
    items: [],
    incomplete_results: null,
    total_count: null,
  },
  errors: null,
  serverMessage: "",
  /**
   * function which calls express backend to search cache and if needed
   * make hit external github API
   * @param {string} searchTerm - user inputed text for github search
   * @returns - the response from the api call
   */
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
