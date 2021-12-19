import Chance from "chance";
import { expect } from "chai";
import User from "../../../api/User.js";

describe("API api/users", () => {
  const user = new User();
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  it("Login with new user", async () => {
    let request = {
      email: email,
      password: password
    };
    let response = await user.Create(request);
    expect(response.statusCode).to.equal(201);

    response = await user.Login(email, password);
    expect(response.statusCode).to.equal(200);
    expect(response.body.authentication.umail).to.equal(email);
  });
});
