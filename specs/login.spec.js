import { expect } from 'chai';
import AuthHelper from '../helpers/auth.helper';
const authHelper = new AuthHelper();

describe('Login', () => {
  before(async()=>{
    await authHelper.login(process.env.EMAIL, process.env.PASSWORD)
    //process.env.USERID = authHelper.response.body.payload.userId;
    console.log(authHelper.response.body);
  })
  it("Checking that response status code is 200", () => {
    expect(authHelper.response.statusCode).to.eq(200);
  });
  //
  it("Checking that response include message", () => {
    expect(authHelper.response.body.message).to.eq("Auth success");
  });
});
