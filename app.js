const express = require('express');
const app = express();

// Health check endpoint for readiness probe
app.get('/_ah/ready', (req, res) => {
    res.sendStatus(200);
});

app.get('/_ah/live', (req, res) => {
    res.sendStatus(200);
});
app.post('/pubsub', express.json(), (req, res) => {
    const message = req.body.message;

    // Process the message here

    res.sendStatus(200);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});