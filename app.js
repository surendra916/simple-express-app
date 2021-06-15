const express =require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('haiii world');
})

const PORT = process.env.port || 4000;

app.listen(PORT,console.log('server running on the port 4000'))
