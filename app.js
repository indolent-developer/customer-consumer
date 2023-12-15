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
    process.stdout.write(`Received message ${message.data}`)

    // Process the message here

    res.sendStatus(200);
});



app.listen(PORT, () => {
    process.stdout.write(`Server listening on port ${PORT}`)
});