var stripe = require("stripe")(
  "sk_test_6YC8jwlKPpcYdF21iLIdEclK"
);

module.exports = function (ctx, cb) {
  stripe.accounts.createExternalAccount(
  ctx.body.account,
  { external_account: ctx.body.token,
    default_for_currency: true},
  function(err, card) {
      cb(null, {card: card || err});
  }
);
};