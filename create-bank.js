var stripe = require("stripe")(
  "sk_test_6YC8jwlKPpcYdF21iLIdEclK"
);

module.exports = function (ctx, cb) {
stripe.customers.createSource(
  ctx.body.token,
  {source: { 
    object: "bank_account",
    account_number: ctx.body.account_number,
    country: ctx.body.country,
    currency: ctx.body.currency,
    account_holder_name: ctx.body.account_holder_name,
    account_holder_type: "individual",
    routing_number: ctx.body.routing_number
  }},
  function(err, card) {
      cb(null, {card: card || err});
  }
);
};