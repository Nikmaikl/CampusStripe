

var stripe = require("stripe")(
  "sk_test_6YC8jwlKPpcYdF21iLIdEclK"
);

module.exports = function (ctx, cb) {
stripe.customers.retrieveCard(
  ctx.body.customer,
  ctx.body.card,
  function(err, obj) {
      cb(null, {obj: obj || err});}
);
};