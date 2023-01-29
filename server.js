require('dotenv').config();
const http = require('http');
const app = require('./src/app');
const logs = require('./src/helpers/logs');

const port = process.env.APP_PORT || 3000;

const server = http.createServer(app);

server.listen(port, function (e) {
    if (!e) {
        logs.initRunningService();
    } else {
        logs.errorRunningService();
    }
});