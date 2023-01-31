require('dotenv').config();
const http = require('http');
const app = require('./src/app');
const logs = require('./src/helpers/logs');
const db = require('./src/config/database');

const port = process.env.APP_PORT || 3000;

const server = http.createServer(app);

server.listen(port, function (e) {
    if (!e) {
        logs.initRunningService(db);
    } else {
        logs.errorRunningService();
    }
});