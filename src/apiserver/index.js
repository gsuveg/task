const express = require('express');
const app = express();
const fs = require('fs');
const util = require('util');
const cors = require("cors");
const axios = require('axios')
const path = require("path");

const port = process.env.PORT || 9000;
const server = app.listen(port);

server.timeout = 1000 * 60 * 2; // 2 minutes

app.use(cors());
// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.post('/api/storeAnswer', (req, res) => {

    axios
        .post('https://virtserver.swaggerhub.com/L8475/task/1.0.0/conversation', {
            conversation: req
        })
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            console.log(res)
        })
        .catch(error => {
            console.error(error)
        })

    return;
})


app.get('/api/getflow', (req, res) => {
    try {
        const readFile = util.promisify(fs.readFile);

        function openFile() {
            return readFile(path.resolve(__dirname, "../storage/flow.json"));
        }

        openFile().then(data => {
        res.send({questions: data.toString()});
        })
        
      } catch (err) {
        console.log(err);
        return;
    }
})
