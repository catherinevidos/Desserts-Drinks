if (process.env.NODE_ENV === "production") {
  module.exports = require("./secret_prod");
} else {
  module.exports = require("./secret_dev");
}