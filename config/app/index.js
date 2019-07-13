const path = require('path');
const os = require('os');
const express = require('express');
const app = express();
const SERVER_PORT = process.env.PORT || 9009;
const logger = require('eazy-logger').Logger({
    useLevelPrefixes: false
});

app.use(express.static(path.resolve('build')));

app.get('/*', (_req, res) => {
    res.sendFile(path.resolve('build', 'index.html'));
});

app.listen(SERVER_PORT, () => {
    const netInterfaces = os.networkInterfaces();
    let address = '';

    Object.keys(netInterfaces).forEach((name) => {
        for (const item of netInterfaces[name]) {
            if (item.family !== 'IPv4' || item.internal !== false) {
                continue;
            }

            address = item.address;
        }
    });

    logger.info('{blue:Server listening on:}');
    logger.info('{gray:----------------------------------------}');
    logger.info(`      Local: {cyan:http://localhost:${SERVER_PORT}}`);
    if (address) {
        logger.info(`   External: {cyan:http://${address}:${SERVER_PORT}}`);
    }
    logger.info('{gray:----------------------------------------}');
});
