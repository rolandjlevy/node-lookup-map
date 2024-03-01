const legacyLookupMap = {
  "www.dev.cromwell.co.uk#account_purchases_orders#returnSummarySubHeader": {
    "domain": "www.dev.cromwell.co.uk",
    "page_key": "account_purchases_orders",
    "translation_key": "returnSummarySubHeader",
    "translation_type": "web",
    "translation_value": "After You Submit Your Return Request:"
  },
  "www.dev.cromwell.ro#account_purchases_orders#returnSummarySubHeader": {
    "domain": "www.dev.cromwell.ro",
    "page_key": "account_purchases_orders",
    "translation_key": "returnSummarySubHeader",
    "translation_type": "web",
    "translation_value": "După ce trimiteți cererea de returnare:"
  },
  "www.dev.cromwell.co.uk#account_purchases_orders#returnSubTotalExVAT": {
    "domain": "www.dev.cromwell.co.uk",
    "page_key": "account_purchases_orders",
    "translation_key": "returnSubTotalExVAT",
    "translation_type": "web",
    "translation_value": "Sub Total Ex VAT:"
  }};

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

const getKey = ({ domain, page_key, translation_key}) => `${domain}#${page_key}#${translation_key}`;

const key0 = getKey(featureArray[0]);
const key1 = getKey(featureArray[1]);

console.log('Feature exists:', 'key:', key0, legacyLookupMap[key0]);
console.log('Feature does not exists:', 'key:', key1, legacyLookupMap[key1]);
