var express = require('express');
var router = express.Router();
const donateRoutes = require('./donate');
const apiRoutes = require('./api');
// const { rateLimit } = require('express-rate-limit');


// const limiter = rateLimit({
//   windowMs: parseInt(process.env.RATE_LIMIT_TIME) * 60 * 1000,
//   max: parseInt(process.env.RATE_LIMIT),
//   standardHeaders: "draft-7",
//   legacyHeaders: false,
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/donate', donateRoutes);
router.use('/api', apiRoutes);

router.use('/stripe-webhook',  bodyParser.raw({type: 'application/json'}), stripeRoutes)


module.exports = router;
