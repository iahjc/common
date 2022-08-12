(function(global) {
    var a = 1;
    function api() {
        return {
            code: 1,
            data: {
                a,
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

    global.iife_module = {
        api: api,
        handle: handle,
        sum: sum
    }
})(window);


const iife_data = iife_module.api()
const iife_a = iife_module.handle(iife_data, "a");
const iife_b = iife_module.handle(iife_data, "b");

console.log("index_iife.js 执行结果： " + iife_module.sum(iife_a, iife_b))