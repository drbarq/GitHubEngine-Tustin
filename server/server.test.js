const request = require("supertest");
const app = require("./server");

describe("Backend Endpoints", () => {
  let searchTerm = "react";

  it("should return repo information from github", async () => {
    const res = await request(app).get(`/searchGitHub/${searchTerm}`);
    expect(res.statusCode).toEqual(200);
    expect((res.body.message = `Results for ${searchTerm} from Github`));
  });

  it("should pull repo information from redis cache", async () => {
    const res = await request(app).get(`/searchGitHub/${searchTerm}`);
    expect(res.statusCode).toEqual(200);
    expect((res.body.message = `Results for ${searchTerm} from cache`));
  });

  it("should return 200 when no repo is found in cache or github", async () => {
    searchTerm = "asdfjklhasdfjkherjkherlkj";
    const res = await request(app).get(`/searchGitHub/${searchTerm}`);
    expect(res.statusCode).toEqual(200);
  });
});
