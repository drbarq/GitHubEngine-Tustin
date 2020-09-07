import { searchModel } from "./index";
import { createStore } from "easy-peasy";
import { gihubItem } from "../test/testUtils";

describe("testing global state", () => {
  let store;
  beforeEach(() => {
    store = createStore(searchModel);
  });

  test("update search term", async () => {
    let searchTerm = "tetris";
    store.getActions().updateSearchedTerm(searchTerm);
    expect(store.getState().searchedTerm).toEqual(searchTerm);
  });

  test("update server message", () => {
    let message = "Results for searchTerm from the cache";
    store.getActions().updateServerMessage(message);
    expect(store.getState().serverMessage).toEqual(message);
  });

  test("update data object", () => {
    let dataResponse = {
      data: {
        items: [gihubItem],
        incomplete_results: true,
        total_count: Math.floor(Math.random() * 90000) + 10000,
      },
    };
    store.getActions().updateDataObject(dataResponse);
    expect(store.getState().data).toEqual(dataResponse.data);
  });
});
