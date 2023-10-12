const {mapObject} = require("../mapObject")

const testObject = { a: 1, b: 2, c: 3 };

const transformedMapObject = mapObject(testObject, (value) => value * 3)

console.log(transformedMapObject)


