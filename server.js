const express = require('express');

const app = express();

let PORT = process.env.PORT;
if(PORT == null || PORT==""){
    PORT = 3000;
};

app.get('/', (req,res) => {
    res.status("200").send("Get Online '/")
})

app.listen(PORT, () => {
    console.log(`Server Online, Port: ${PORT}`);
})