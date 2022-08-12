// 函数作用域+闭包
function test() {
    var a  =  1;
    return {
        set(v) {
            a = v;
        },
        get() {
            return a;
        }
    }
}

const package_handle = test()

console.log("index_private.js -- 闭包取值：" + package_handle.get())
package_handle.set(2)
console.log("index_private.js -- 闭包取值：" + package_handle.get())