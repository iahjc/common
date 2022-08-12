(function(global) {
    var a = 1;
    function api() {
        return {
            code: 0,
            data: {
                a,
                b: 2
            }
        }
    }
    function handle(data, key) {
        return data.data[key]
    }

    function sum(a, b) {
        return a + b;
    }
    window.iife_streng_module = {
        api,
        handle,
        sum
    }
})(window);


(function(global, s) {
    console.log(s)
    function sum(a, b) {
        return a + b + 3;
    }

    global.iife_streng2_module = {
        sum,
        api: s.api,
        handle: s.handle
    }
})(window, window.iife_streng_module);


const ccc = iife_streng2_module.api();
const cc_a = iife_streng2_module.handle(ccc, "a");
const cc_b = iife_streng2_module.handle(ccc,"b");

console.log("index_iife_streng.js 执行结果："+iife_streng2_module.sum(cc_a, cc_b));