/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const gihubItem = {
  created_at: "2013-05-24T16:15:54Z",
  updated_at: "2020-09-07T00:11:26Z",
  description:
    "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
  id: 10270250,
  name: "react",
  owner: {
    avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
    html_url: "https://github.com/facebook",
    url: "https://api.github.com/users/facebook",
    login: "facebook",
  },
  score: 1,
  watchers: 155379,
  stargazers_count: 155379,
  language: "JavaScript",
  html_url: "https://github.com/facebook/react",
  forks_count: 30517,
};
