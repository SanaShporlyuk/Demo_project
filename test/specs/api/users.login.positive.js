import Chance from "chance";
import { expect } from "chai";
import superagent from "superagent";

describe("api/users", () => {
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
  });
});
