const { json } = require("express/lib/response");

const initRunningService = function () {
    console.log("\n\n\n======================================SERVICE======================================");
    console.log("Name : " + process.env.APP_NAME);
    console.log("Version : " + process.env.APP_VERSION);
    console.log("Date : " + new Date());
    console.log("======================================SERVICE======================================");
}

const errorRunningService = function () {
    console.log("Error running service!");
    console.log(e);
}

const request = function (req) {
    const fullURL = fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log("\n\n\n==================================================================");
    console.log("REQUEST\n");
    console.log("Url : " + fullURL);
    console.log("Method : " + req.method);
    console.log("Content-type : " + req.headers['content-type']);
    console.log("User Agent : " + req.headers['user-agent']);
    console.log("Body : " + req.body);
}

const response = function (status, body) {
    console.log("\nRESPONSE\n");
    console.log("Status : " + status);
    console.log("Body : " + JSON.stringify(body, null, 4));
    console.log("==================================================================");
}

module.exports = {
    initRunningService,
    errorRunningService,
    request,
    response,
}