import m from "./api.js"
import sum from "./sum.js"

const data = m.api()
const a = m.handle(data, "a")
const b = m.handle(data, "b")
console.log(sum(a, b))