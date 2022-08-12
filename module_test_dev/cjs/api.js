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