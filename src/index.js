const express = require('express')
const app = express()
const morgan=require('morgan');
const port = 3000


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('json spaces', 2)
 
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})