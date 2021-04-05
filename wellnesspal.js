// Use express
const express = require('express');
const app = express();


// Setup Mysql
const cors = require('cors');
const port = process.env.PORT || 12345
const mysql = require('mysql');
app.use(cors());

// Used for PUT, POST method, help to send request as Json or String, array when needed
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Helper object
var server = {port: port};


db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2439',
    password: '2439',
    database: 'testing_db'
})  


app.use(express.static('public'));                                          

//Acquire books route. ( testing purposes )
const bookRouter = require('./routes/books');
app.use('/books', bookRouter);

//Acquire sign-in, sign-up route.
const flowRouter = require('./routes/flows')
app.use('/flows', flowRouter);

app.listen(server.port, () => {
    console.log('Server is running on localhost:' + server.port)
});
