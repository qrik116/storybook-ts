const path = require('path');
const os = require('os');
const express = require('express');
const app = express();
const SERVER_PORT = process.env.PORT || 9009;
var logger = require("eazy-logger").Logger({
    useLevelPrefixes: false
});

app.use(express.static(path.resolve('build')));

app.get('/*', (_req, res) => {
    res.sendFile(path.resolve('build', 'build/index.html'));
});

app.listen(SERVER_PORT, () => {
    const { eth0 } = os.networkInterfaces();

    logger.info('{blue:Server listening on:}');
    logger.info('{gray:-------------------------------------}');
    logger.info(`      Local: {cyan:http://localhost:${SERVER_PORT}}`);
    logger.info(`   External: {cyan:http://${eth0[0].address}:${SERVER_PORT}}`);
    logger.info('{gray:-------------------------------------}');
});
