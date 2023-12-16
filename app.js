const express = require('express');

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
    log(`Received message ${message.data} with attributes ${JSON.stringify(message.attributes)}.`);

    // Process the message here

    res.sendStatus(200);
});



app.listen(PORT, () => {
    log(`Server listening on port ${PORT}...`);
});

function log(message) {
    const logEntry = {
        timestamp: new Date().toISOString(),
        component: "app.js",
        severity: "INFO",
        message: message
    }

    console.log(JSON.stringify(logEntry));
}