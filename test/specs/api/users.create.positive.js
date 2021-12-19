import Chance from "chance";
import { expect } from "chai";
import User from "../../../api/User.js";

describe("API api/users", () => {
  const user = new User();
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  it("Create new user", async () => {
    let request = {
      email: email,
      password: password,
      passwordRepeat: password,
      securityQuestion: {
        id: 2,
        question: "Mother's maiden name?",
        createdAt: "2021-12-16T00:19:40.807Z",
        updatedAt: "2021-12-16T00:19:40.807Z",
      },
      securityAnswer: "test",
    };
    const response = await user.Create(request);
    expect(response.statusCode).to.equal(201);
  });
});
