import React from "react";
import Enzyme, { shallow, ShallowWrapper, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import { MemoryRouter } from "react-router";

import Search from "./components/Search";
import Details from "./components/Details";
import ErrorScreen from "./components/Details/components/ErrorScreen";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders title", () => {
  const wrapper = shallow(<App />);
  const appTitle = findByTestAttr(wrapper, "component-app-title");
  expect(appTitle.length).toBe(1);
});

test("should display Search page", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
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
