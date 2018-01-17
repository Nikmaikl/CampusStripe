var stripe = require("stripe")(
  "sk_test_6YC8jwlKPpcYdF21iLIdEclK"
);

module.exports = function (ctx, cb) {
  stripe.accounts.create({
    country: "US",
    type: "custom",
    email: ctx.body.email
  }, function(err, account) {
    cb(null, { account: account || err});
  });
};