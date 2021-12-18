import Chance from "chance";
import { expect } from "chai";
import superagent from "superagent";

describe("api/users", () => {
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
    const response = await superagent.post(
      `${browser.options.baseUrl}/api/Users`,
      request
    );
    expect(response.statusCode).to.equal(201);
  });
});
