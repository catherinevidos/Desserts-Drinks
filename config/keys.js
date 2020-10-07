// module.exports = {
//   mongoURI: "mongodb+srv://dbAdmin:94XAF95TbHahjy3G@cluster0.u9tu2.mongodb.net/Desserts&Drinks?retryWrites=true&w=majority",
//   secretOrKey: 'secret'
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}