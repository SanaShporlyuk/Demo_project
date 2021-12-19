import Chance from "chance";
import { expect } from "chai";
import User from "../../../api/User.js";

describe("API api/users", () => {
  const user = new User();
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  it("Create user with the same email", async () => {
    let response = await user.Create(email, password);
    expect(response.statusCode).to.equal(201);

    response = await user.Create(email, password);
    expect(response.statusCode).to.equal(400);
  });
});
