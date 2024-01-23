//const informationDeskService = require("./services");
const currenciesJSON = require('../../utils/currencies.json');

exports.donate = async (req, res, next) => {
  try {
    const currencies = currenciesJSON.current;
    return res.render('donate/index', {currencies, API_ENDPOINT: process.env.API_ENDPOINT})
  } catch (error) {
    next(error);
  }
};