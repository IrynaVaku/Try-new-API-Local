import { expect } from 'chai';
import AuthHelper from '../helpers/auth.helper';

const authHelper = new AuthHelper();

const generateEmail = () =>
  `newuser${Math.floor(Math.random() * 1000)}@gmail.com`;
const testEmail = generateEmail();

describe('Auth', () => {
  before(async () => {
    await authHelper.create('Iryna', 'Vaku', testEmail, process.env.PASSWORD);
    console.log(authHelper.response.body);
  });
  it('Checking that response status code is 201', () => {
    expect(authHelper.response.statusCode).to.eq(201);
  });
});
