window.a_module = {
    api () {
        return {
            code: 0,
            data: {
                a: 1,
                b: 2,
            }
        };
    },
    handle(data, key) {
        return data.data[key];
    },
    sum(a, b) {
        return a + b;
    }
}


const data_a =  window.a_module.api();
const a_a = window.a_module.handle(data_a, "a");
const b_b = window.a_module.handle(data_a, "b");

console.log("index_namespace.js: " + window.a_module.sum(a_a, b_b));