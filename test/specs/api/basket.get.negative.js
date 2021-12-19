import { expect } from "chai";
import User from "../../../api/User.js";

describe("API rest/basket", () => {
  const user = new User();

  it("Unauthorized to view basket", async () => {    
    user.bid = 123;
    let response = await user.GetBasket();
    expect(response.statusCode).to.equal(401);
  });
});
