import { expect } from "chai";
import BaseAPI from "../../../base/baseAPI.js";

describe("rest/basket", () => {
  let api = new BaseAPI();

  it("Unauthorized to view basket", async () => {
    let response = await api.GET("rest/basket/123");
    expect(response.statusCode).to.equal(401);
  });
});
