import React from "react";
import { searchModel } from "./index";
import { createStore } from "easy-peasy";

const gihubItem = {
  created_at: "2013-05-24T16:15:54Z",
  updated_at: "2020-09-07T00:11:26Z",
  description:
    "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
  id: 10270250,
  name: "react",
  owner: {
    avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
    events_url: "https://api.github.com/users/facebook/events{/privacy}",
    followers_url: "https://api.github.com/users/facebook/followers",
    following_url:
      "https://api.github.com/users/facebook/following{/other_user}",
    gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/facebook",
    id: 69631,
    login: "facebook",
    node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
    organizations_url: "https://api.github.com/users/facebook/orgs",
    received_events_url:
      "https://api.github.com/users/facebook/received_events",
    repos_url: "https://api.github.com/users/facebook/repos",
    site_admin: false,
    starred_url: "https://api.github.com/users/facebook/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
    type: "Organization",
    url: "https://api.github.com/users/facebook",
  },
  score: 1,
  watchers: 155379,
  stargazers_count: 155379,
  language: "JavaScript",
  html_url: "https://github.com/facebook/react",
  forks_count: 30517,
};

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
