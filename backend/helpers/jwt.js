// const expressjwt = require('express-jwt');
const { expressjwt: jwt } = require("express-jwt");
function authJwt() {
  const secret = process.env.secret;
  const api = process.env.API_URL;
  return jwt({
    secret,
    algorithms: ["HS256"],
    // isRevoked: isRevoked
  }).unless({
    path:
     [
      `${api}/users/login`,
       `${api}/users/register`
      ],
  });
}

async function isRevoked(req, payload, done) {
  if (!payload.isAdmin) {
    done(null, true);
  }

  done();
}

module.exports = authJwt;
