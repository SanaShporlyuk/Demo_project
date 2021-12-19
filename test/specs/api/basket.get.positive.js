import Chance from "chance";
import { expect } from "chai";
import User from "../../../api/User.js";

describe("API rest/basket", () => {
  const user = new User();
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  it("Authorized get basket", async () => {
    let request = {
      email: email,
      password: password
    };
    let response = await user.Create(request);
    expect(response.statusCode).to.equal(201);

    response = await user.Login(email, password);
    expect(response.statusCode).to.equal(200);

    response = await user.GetBasket();
    expect(response.statusCode).to.equal(200);
  });
});
