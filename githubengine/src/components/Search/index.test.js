import React from "react";
import { mount } from "enzyme";
import Search from "./index";
import { findByTestAttr } from "../../test/testUtils";
import { store } from "../../store";
import { StoreProvider } from "easy-peasy";

const setup = () => {
  return mount(
    <StoreProvider store={store}>
      <Search />
    </StoreProvider>
  );
};

describe("tests the Search bar functionality", () => {
  test("renders search bar component without error", () => {
    const wrapper = setup();
    const searchComponent = findByTestAttr(wrapper, "component-searchBar");
    expect(searchComponent.length).toBe(1);
  });
  test("renders search bar input without error", () => {
    const wrapper = setup();
    const searchComponent = findByTestAttr(wrapper, "component-searchInput");
    expect(searchComponent.length).toBe(1);
  });
  test("renders search button", () => {
    const wrapper = setup();
    const searchButton = findByTestAttr(wrapper, "search-button");
    expect(searchButton.length).toBe(1);
  });
});
