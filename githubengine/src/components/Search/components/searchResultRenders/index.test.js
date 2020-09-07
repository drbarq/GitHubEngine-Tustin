import React from "react";
import { mount } from "enzyme";
import SearchResultRenders from "./index";
import { findByTestAttr } from "../../../../test/testUtils";
import { store } from "../../../../store/";
import { StoreProvider } from "easy-peasy";

const setup = () => {
  return mount(
    <StoreProvider store={store}>
      <SearchResultRenders />
    </StoreProvider>
  );
};

describe("test the result render component", () => {
  test("renders search results without error", () => {
    const wrapper = setup();

    const searchResultRenders = findByTestAttr(
      wrapper,
      "component-search-results"
    );
    expect(searchResultRenders.length).toBe(1);
  });
});
