const keythereum = require('keythereum');
const { getAccount } = require('icetea-common/src/utils');

function decode(password, keyObject) {
  const privateKey = keythereum.recover(password, keyObject);
  const account = getAccount(privateKey);
  return account;
}

export default decode;
