const { api, handle } = require("./api");
const sum = require("./sum")

const data = api()
const a = handle(data, "a")
const b = handle(data, "b")
console.log(sum(a, b))