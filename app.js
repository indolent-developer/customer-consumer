const express = require('express');
const app = express();

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
    console.log(`Received message ${message.data}`);

    // Process the message here

    res.sendStatus(200);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});