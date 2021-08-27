let fs = require("fs");
let jwt = require("jsonwebtoken");
require("dotenv").config();

let privateKey = fs.readFileSync(process.env.privateKeyPath);
let teamId = process.env.teamId;
let clientId = process.env.clientId;
let keyId = process.env.keyId;
let validDays = 180; // In days. Max 180 (6 months) according to Apple docs.

let token = jwt.sign(
  {
    iss: teamId,
    iat: 0,
    exp: 86400 * validDays,
    aud: "https://appleid.apple.com",
    sub: clientId,
  },
  privateKey,
  {
    algorithm: "ES256",
    header: {
      kid: keyId,
    },
  }
);

fs.writeFile(__dirname + "/client_secret.txt", token, () => {});
