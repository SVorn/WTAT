const zipCode = require('german-zip-codes');
var myDistrict = zipCode.getDistrictsByZipCode(10318);
console.log(myDistrict);