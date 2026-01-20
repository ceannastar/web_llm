const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;

const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

app.use(cors());

async function logFile() {
  try {
    const filePath = resolve('./chat/9476-affbcd-479426-fbf.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}

let chats = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/chat/:guid', async (req, res) => {
    try {
        const filePath = resolve('./chat/'+req.params.guid+'.json');
        const contents = await readFile(filePath, { encoding: 'utf8' });
        const jsonData = JSON.parse(contents);
        res.json(jsonData);
    } catch (err) {
        res.status(404).json({message: "Not found"});
    }
});

app.listen(port, () => {});