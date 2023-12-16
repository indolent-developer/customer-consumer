const express = require('express');
const { Logging } = require('@google-cloud/logging');


const logging = new Logging({
    projectId: 'pub-sub-poc-408117',
});

const log = logging.log('customer-consumer-log');
const metadata = {
    resource: {
        type: 'global',
    },
};

const app = express();

const PORT = 3000;

// Health check endpoint for readiness probe
app.get('/_ah/ready', (req, res) => {
    res.sendStatus(200);
});

app.get('/_ah/live', (req, res) => {
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send('Hello World! Service version:01 Current time: ' + new Date().toISOString());
});
app.post('/pubsub', express.json(), (req, res) => {
    const message = req.body.message;
    console.log(`Message received: ${message}`);

    // Process the message here

    res.sendStatus(200);
});



app.listen(PORT, () => {
    log.write(log.entry(metadata, `Server listening on port ${PORT}`));
});