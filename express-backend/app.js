// main server file which bootstraps the node server
// it also serves some static files

const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req, res) => res.send('Hullo World'))

app.listen(port, () => console.log('Listening on port 4200'))
