/*
    This function used to format json response.
    code: 0 - success, nonzero - fails
    data: related data
    msg:  error info or something else
 */

const statusCode2msg = {
    200: "OK",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error"
};

module.exports = (code, data, msg) => {
    return {code, data: data || {}, msg: msg || statusCode2msg[code]};
};