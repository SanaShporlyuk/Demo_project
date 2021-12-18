// http://localhost:3000/rest/basket/21

import { expect } from "chai";
import superagent from "superagent";

describe("rest/basket", () => {
  it("Unauthorized to view basket", async () => {
    await superagent.get(
      `${browser.options.baseUrl}/rest/basket/123`,
    ).then(success => {
      throw `Unexpected response: ${success}`;
    }).catch(error => {
      expect(error.response.statusCode).to.equal(401)
    });
  });
});
