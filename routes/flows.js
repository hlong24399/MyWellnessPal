
const express = require('express');
const router = express.Router();


// init
router.get('/', (req, res) => {
  console.log('here');
  res.redirect('/precheck');
})



//Make sure table is empty when server launches
router.get('/precheck', (req, res) => {
  console.log('in precheck')
  let sql = "DROP TABLE IF EXISTS userInfo;"
  db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.redirect('/init_db');
    })
  })
  
  //Create table 
router.get('/init_db', (req, res) => {
  let sql = `CREATE TABLE userInfo 
  (id INT PRIMARY KEY, username VARCHAR(30) NOT NULL, 
  email VARCHAR(30) NOT NULL, 
  password VARCHAR(30) NOT NULL,
  height DOUBLE NOT NULL,
  weight DOUBLE NOT NULL,
  age INT NOT NULL,
  gender VARCHAR(20) NOT NULL
  );`
  db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.redirect('/home')
  })
})
  
  //Show 'userInfo' table
router.get('/list', (req, res) => {
    res.type('text/plain')
    let sql = `SELECT * FROM userInfo;`;
    db.query(sql, (err, data, fields) => {
    if (err) throw err;
    res.json({status: 200,
      message: "User information retrieved.",
      data
      });
  })
})
  
//Sign-up
var ID = 0;
router.post('/new', (req, res) => {
  console.log('in /new')
  let sql = `INSERT INTO userInfo (id, username, email, password, height, weight, age, gender) VALUES (?);`;
  let values = [
    ID=ID+1,
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.height,
    req.body.weight,
    req.body.age,
    req.body.gender
  ];
  db.query(sql, [values], (err, data, fields) => {
    if (err) throw err;
    res.redirect('/home');
  })
})


module.exports = router;