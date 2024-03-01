const legacyLookupMap = require('./legacy-translations.json')

const featureArray = [{
  "domain": "www.dev.cromwell.co.uk",
  "page_key": "account_purchases_orders",
  "translation_key": "returnSubTotalExVAT",
  "translation_type": "web",
  "translation_value": "Sub Total Ex VAT:"
},
{
  "domain": "www.dev.cromwell.co.uk",
  "page_key": "abandoned_basket",
  "translation_key": "basketTotalExVAT",
  "translation_type": "web",
  "translation_value": "Sub Total Ex VAT:"
}];

// helper function to get key
const getKey = ({ domain, page_key, translation_key}) => `${domain}#${page_key}#${translation_key}`;

const result = featureArray.map(item => {
  const key = getKey(item);
  const found = legacyLookupMap[key];
  let msg = `translation with key: '${key}' `;
  msg += found ? `exists -> ${JSON.stringify(found, null, 2)}\n` : `doesn't exist\n`
  return msg;
}).join('')

console.log(result);
