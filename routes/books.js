/*
/books/*
*/

const express = require('express');
const router = express.Router();



// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM BOOKS WHERE price > 20;`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "BOOKS lists retrieved successfully",
      data
    })
  })
});

// create new user
// router.post('/new', function(req, res) {
//   let sql = `INSERT INTO users(name, gender) VALUES (?)`;
//   let values = [
//     req.body.name,
//     req.body.gender
//   ];
//   db.query(sql, [values], function(err, data, fields) {
//     if (err) throw err;
//     res.json({
//       status: 200,
//       message: "New user added successfully"
//     })
//   })
// });


// INSERT INTO books (id, title, author, price, qty) VALUES (2001, 'queen of jungle', 'drcrazy', 200, 20);
router.post('/new', function(req, res) {
  let sql = `INSERT INTO books (id, title, author, price, qty) VALUES (?)`;
  let values = [
    req.body.id,
    req.body.title,
    req.body.author,
    req.body.price,
    req.body.qty
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
});

/*
Params = @{id = 2001, title = 'queenofjungle', author = 'drcrazy', price = 200, qty = 20};
*/




// testing point
router.get('/test', (req, res) => {
  res.type('text/plain')
  res.send('hello there, this is Computer.')
})


// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM BOOKS WHERE price > 20;`;
  let content = '';
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "BOOKS lists retrieved successfully",
      data
    })
  })
});

// custom 404 page
router.use((req, res) => {
res.type('text/plain')
res.status(404)
res.send('404 - Not Found')
})

// custom 500 page
router.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

//Export to the router for later calls
module.exports = router;