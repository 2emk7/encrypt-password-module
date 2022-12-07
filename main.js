// First, we require the 'crypto' module, which provides cryptographic functions
const crypto = require('crypto');

// Next, we define the function that will encrypt a password
function encryptPassword(password) {
  // We create a new SHA-256 hash object
  const hash = crypto.createHash('sha256');

  // We update the hash with the password that we want to encrypt
  hash.update(password);

  // Finally, we return the encrypted password as a hexadecimal string
  return hash.digest('hex');
}

// Now we can use the function to encrypt a password
const password = 'my-password';
const encryptedPassword = encryptPassword(password);

console.log(`The encrypted password is: ${encryptedPassword}`);
