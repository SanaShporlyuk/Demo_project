import Chance from 'chance';
import { expect } from "chai";
import superagent from "superagent";

describe('Register User', () => {
    const chance = new Chance();
    const email = chance.email();

    it('Create user befor login', async () => {
        let request = { "email": email, "password": "blabla3#_", "passwordRepeat": "blabla3#_", "securityQuestion": { "id": 2, "question": "Mother's maiden name?", "createdAt": "2021-12-16T00:19:40.807Z", "updatedAt": "2021-12-16T00:19:40.807Z" }, "securityAnswer": "test" };
        const response = await superagent.post('http://localhost:3000/api/Users', request);
        expect(response.statusCode).to.equal(201);
        // const response = await superagent.get('http://localhost:3000/api/SecurityQuestions/');
        // console.log(response.body)
        //expect(response.statusCode).to.equal(200);

        // let requestBody = {};
        
        // console.log(respons);

    })
});