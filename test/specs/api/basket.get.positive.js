import Chance from "chance";
import { expect } from "chai";
import superagent from "superagent";

describe("rest/basket", () => {
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  it("Login with new user", async () => {
    let request = {
      email: email,
      password: password
    };
    let response = await superagent.post(
      `${browser.options.baseUrl}/api/Users`,
      request
    );
    expect(response.statusCode).to.equal(201);

    response = await superagent.post(
      `${browser.options.baseUrl}/rest/user/login`,
      request
    );
    expect(response.statusCode).to.equal(200);
    expect(response.body.authentication.umail).to.equal(email);

    let bid = response.body.authentication.bid;
    let token = response.body.authentication.token;
    response = await superagent.get(
      `${browser.options.baseUrl}/rest/basket/${bid}`
    ).set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).to.equal(200);
  });
});
