const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
let PORT = process.env.PORT;
if(PORT == null || PORT==""){
    PORT = 3000;
};

let data = []

app.get('/', (req,res) => {
    res.status("200").send(" '/' WebSite Data")
})

app.post('/submit', (req,res) => {
    console.log(req.body.test);
    res.status("200").send("Received!")
})

app.listen(PORT, () => {
    console.log(`Server Online, Port: ${PORT}`);
})