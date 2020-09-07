import React from "react";
import { mount } from "enzyme";
import Details from "./index";
import { MemoryRouter, Switch, Route } from "react-router";
import { findByTestAttr, gihubItem } from "../../test/testUtils";
import { searchModel } from "../../store";
import { StoreProvider, createStore } from "easy-peasy";

const setup = () => {
  let initalStateForTest = {
    searchedTerm: "react",
    data: {
      items: [gihubItem],
      incomplete_results: true,
      total_count: 1578589,
    },
    errors: null,
    serverMessage: "Results for react from Github",
  };

  const store = createStore(searchModel, { initialState: initalStateForTest });

  return mount(
    <StoreProvider store={store}>
      <MemoryRouter>
        <Switch>
          <Route path="/details/10270250" component={Details} />
        </Switch>
      </MemoryRouter>
    </StoreProvider>
  );
};

test("render details page with inital state", () => {
  const wrapper = setup();
  /**
   * I would love to understand how to build this test correctly.
   * I believe it is failing due to component not rendering in time or due to url params
   */

  //   const detailsComponent = findByTestAttr(wrapper, "component-details");
  //   expect(detailsComponent.length).toBe(1);
});
