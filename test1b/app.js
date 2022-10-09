const express = require('express');
const app = express();
const operation = require('./routers/router');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Home Page');
})
app.use('/api/v1',operation);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})