
var stripe = require("stripe")(
  "sk_test_6YC8jwlKPpcYdF21iLIdEclK"
);

module.exports = function (ctx, cb) {
  stripe.customers.create({
  }, function(err, customer) {
      cb(null, {customer: customer || err});
  });
};