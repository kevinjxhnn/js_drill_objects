const {defaults} = require("../defaults")
const testObject = { name: 'Jacob', age: 30 };
const defaultValues = { age: 25, city: 'Hawaii' };

console.log(defaults(testObject, defaultValues))



