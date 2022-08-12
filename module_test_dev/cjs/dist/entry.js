(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const handle = require("./handle")

function api() {
    return {
        code: 0,
        data: {
            a:5,
            b: 2
        }
    }
}

module.exports = {
    api,
    handle
};
},{"./handle":3}],2:[function(require,module,exports){
const { api, handle } = require("./api");
const sum = require("./sum")

const data = api()
const a = handle(data, "a")
const b = handle(data, "b")
console.log(sum(a, b))
},{"./api":1,"./sum":4}],3:[function(require,module,exports){
function handle(data, key) {
    return data.data[key]
}

module.exports = handle;
},{}],4:[function(require,module,exports){
function sum(a, b) {
    return a + b;
}

module.exports = sum;
},{}]},{},[2]);
