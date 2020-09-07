import React from "react";
import { mount } from "enzyme";
import SearchResultRenders from "./index";
import { findByTestAttr } from "../../../../test/testUtils";
import { store } from "../../../../store/";
import { StoreProvider } from "easy-peasy";

// const defaultProps = {
//     searchedTerm: 'react',
//     data: {
//         incomplete_results: false,
//         items: [{
//             archive_url: "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
//             archived: false,
//             assignees_url: "https://api.github.com/repos/facebook/react/assignees{/user}",
//             blobs_url: "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
//             branches_url: "https://api.github.com/repos/facebook/react/branches{/branch}",​​​​
//             clone_url: "https://github.com/facebook/react.git",​​​​
//             collaborators_url: "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
//             comments_url: "https://api.github.com/repos/facebook/react/comments{/number}",​​​​
//             commits_url: "https://api.github.com/repos/facebook/react/commits{/sha}",​​​​
//             compare_url: "https://api.github.com/repos/facebook/react/compare/{base}...{head}",​​​​
//             contents_url: "https://api.github.com/repos/facebook/react/contents/{+path}",​​​​
//             contributors_url: "https://api.github.com/repos/facebook/react/contributors",​​​​
//             created_at: "2013-05-24T16:15:54Z",default_branch: "master",​​​​deployments_url: "https://api.github.com/repos/facebook/react/deployments",​​​​description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",​​​​disabled: false,​​​​downloads_url: "https://api.github.com/repos/facebook/react/downloads",​​​​events_url: "https://api.github.com/repos/facebook/react/events",​​​​fork: false,​​​​forks: 30517,
//             forks_count: 30517,
//             forks_url: "https://api.github.com/repos/facebook/react/forks",
//             full_name: "facebook/react",
//             git_commits_url: "https://api.github.com/repos/facebook/react/git/commits{/sha}",
//             git_refs_url: "https://api.github.com/repos/facebook/react/git/refs{/sha}",
//             git_tags_url: "https://api.github.com/repos/facebook/react/git/tags{/sha}",
//             git_url: "git://github.com/facebook/react.git",
//             has_downloads: true,
//             has_issues: true,
//             has_pages: true,
//             has_projects: true,
//             has_wiki: true,
//             homepage: "https://reactjs.org",
//             hooks_url: "https://api.github.com/repos/facebook/react/hooks",
//             html_url: "https://github.com/facebook/react",
//             id: 10270250,
//             issue_comment_url: "https://api.github.com/repos/facebook/react/issues/comments{/number}",
//             issue_events_url: "https://api.github.com/repos/facebook/react/issues/events{/number}",
//             issues_url: "https://api.github.com/repos/facebook/react/issues{/number}",
//             keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
//             labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
//             language: "JavaScript",
//             languages_url: "https://api.github.com/repos/facebook/react/languages",
//             license: { key: "mit", name: "MIT License", spdx_id: "MIT" },
//             merges_url: "https://api.github.com/repos/facebook/react/merges",
//             milestones_url: "https://api.github.com/repos/facebook/react/milestones{/number}",
//             mirror_url: null,
//             name: "react",
//             node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
//             notifications_url: "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
//             open_issues: 571,
//             open_issues_count: 571,
//             owner: { avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
//                 events_url: "https://api.github.com/users/facebook/events{/privacy}",
//                 followers_url: "https://api.github.com/users/facebook/followers",
//                 following_url: "https://api.github.com/users/facebook/following{/other_user}",
//                 gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
//                 gravatar_id: "",
//                 html_url: "https://github.com/facebook",
//                 id: 69631,
//                 login: "facebook",
//                 node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
//                 organizations_url: "https://api.github.com/users/facebook/orgs",
//                 received_events_url: "https://api.github.com/users/facebook/received_events",
//                 repos_url: "https://api.github.com/users/facebook/repos",
//                 site_admin: false,
//                 starred_url: "https://api.github.com/users/facebook/starred{/owner}{/repo}",
//                 subscriptions_url: "https://api.github.com/users/facebook/subscriptions",
//                 type: "Organization",
//                 url: "https://api.github.com/users/facebook"
//             },
//             private: false,
//             pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
//             pushed_at: "2020-09-05T22:15:39Z",
//             releases_url: "https://api.github.com/repos/facebook/react/releases{/id}",
//             score: 1,
//             size: 157712,
//             ssh_url: "git@github.com:facebook/react.git",
//             stargazers_count: 155379,
//             stargazers_url: "https://api.github.com/repos/facebook/react/stargazers",
//             statuses_url: "https://api.github.com/repos/facebook/react/statuses/{sha}",
//             subscribers_url: "https://api.github.com/repos/facebook/react/subscribers",
//             subscription_url: "https://api.github.com/repos/facebook/react/subscription",
//             svn_url: "https://github.com/facebook/react",
//             tags_url: "https://api.github.com/repos/facebook/react/tags",
//             teams_url: "https://api.github.com/repos/facebook/react/teams",
//             trees_url: "https://api.github.com/repos/facebook/react/git/trees{/sha}",
//             updated_at: "2020-09-07T00:11:26Z",
//             url: "https://api.github.com/repos/facebook/react",
//             watchers: 155379,
//             watchers_count: 155379,
//         }],
//         total_count: 1577271
//     }
// }

const setup = () => {
  return mount(
    <StoreProvider store={store}>
      <SearchResultRenders />
    </StoreProvider>
  );
};

test("renders search results without error", () => {
  const wrapper = setup();

  const searchResultRenders = findByTestAttr(
    wrapper,
    "component-search-results"
  );
  expect(searchResultRenders.length).toBe(1);
});
