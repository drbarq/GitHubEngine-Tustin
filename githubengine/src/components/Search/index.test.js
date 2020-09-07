import React from "react";
import Enzyme, { shallow, ShallowWrapper, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Search from "./index";

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

test("renders search bar component without error", () => {
  const wrapper = shallow(<Search />);
  const searchComponent = findByTestAttr(wrapper, "component-searchBar");
  expect(searchComponent.length).toBe(1);
});
test("renders search bar input without error", () => {
  const wrapper = shallow(<Search />);
  const searchComponent = findByTestAttr(wrapper, "component-searchInput");
  expect(searchComponent.length).toBe(1);
});
test("can type text in search input", () => {
  const wrapper = shallow(<Search />);
  const searchComponent = findByTestAttr(wrapper, "component-searchInput");

  searchComponent.simulate("change", { target: { value: "react tetris" } });

  console.log(searchComponent.debug());
  //   expect(searchComponent.get().value).to.equal("react tetris");
});

test("renders search button", () => {
  const wrapper = shallow(<Search />);
  const searchButton = findByTestAttr(wrapper, "search-button");
  expect(searchButton.length).toBe(1);
});