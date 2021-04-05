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

app.get('/posts', (req,res) => {

    res.status("200").send("Here's some posts")
})

// Register

// Login

// Logout

app.post('/create', (req,res) => {
    console.log(req.body.test);

    res.status("201").send("Received!")
})

app.put('/update', (req,res) => {

    res.status("201").send("Update Success!")
})

app.delete('/delete', (req,res) => {

    res.status("200").send("Post Delete Successful!")
})

app.listen(PORT, () => {
    console.log(`Server Online, Port: ${PORT}`);
})