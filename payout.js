
var stripe = require("stripe")(
  "sk_test_6YC8jwlKPpcYdF21iLIdEclK"
);

module.exports = function (ctx, cb) {
    stripe.payouts.create({
    amount: 30,
    currency: "usd"
  }, function(err, payout) {
      cb(null, {payout: payout || err});
  });
};