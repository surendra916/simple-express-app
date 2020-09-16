const express =require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('haiii world');
})
 

app.listen(4000,console.log('server running on the port 4000'))