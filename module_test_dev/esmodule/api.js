import handle from "./handle.js"

function api() {
    return {
        code: 0,
        data: {
            a:5,
            b: 2
        }
    }
}

export default {
    api,
    handle
};