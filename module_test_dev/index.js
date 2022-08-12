function api () {
    return {
        code: 0,
        data: {
            a: 1,
            b: 2
        }
    }
}

function handle(data, key) {
    return data.data[key];
}

function sum(a, b) {
    return a + b;
}

const data = api();
const a = handle(data, "a");
const b = handle(data, "b");

console.log("index.js: " + sum(a, b));