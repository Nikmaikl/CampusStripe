
var stripe = require("stripe")(
  "sk_test_6YC8jwlKPpcYdF21iLIdEclK"
);

module.exports = function (ctx, cb) {
  stripe.customers.createSource(
    ctx.body.token,
    { source: ctx.body.cardId },
    function(err, card) {
      cb(null, {card: card || err});
    }
  );
};