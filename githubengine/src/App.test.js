import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import { MemoryRouter } from "react-router";
import { findByTestAttr } from "./test/testUtils";
import Search from "./components/Search";
import ErrorScreen from "./components/Details/components/ErrorScreen";
import { store } from "./store";
import { StoreProvider } from "easy-peasy";

describe("test the overall App structure and functionality", () => {
  test("App renders without error", () => {
    const wrapper = shallow(<App />);
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  test("renders app title", () => {
    const wrapper = shallow(<App />);
    const appTitle = findByTestAttr(wrapper, "component-app-title");
    expect(appTitle.length).toBe(1);
  });

  test("should display Search page", () => {
    const wrapper = mount(
      <StoreProvider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </StoreProvider>
    );
    expect(wrapper.find(ErrorScreen)).toHaveLength(0);
    expect(wrapper.find(Search)).toHaveLength(1);
  });

  test("should display Error page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/error"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Search)).toHaveLength(0);
    expect(wrapper.find(ErrorScreen)).toHaveLength(1);
  });
});
