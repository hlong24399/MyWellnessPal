// /*
// /books/*
// */

// const express = require('express');
// const router = express.Router();
// var ID = 1;


// // get user lists
// router.get('/list', function(req, res) {
//   var sql = "SELECT * FROM userInfo;"
//   db.query(sql, (err, data, fields) => {
//     if (err) throw err;
//     res.json({
//       status: 200,
//       message: "BOOKS lists retrieved successfully",
//       data
//     })
//   })
// });

// // INSERT INTO books (id, title, author, price, qty) VALUES (2001, 'queen of jungle', 'drcrazy', 200, 20);
// router.post('/new', (req, res) => {
//   let sql = `INSERT INTO userInfo (id, username, email) VALUES (?);`;
//   let values = [
//     ID=ID+1,
//     req.body.username,
//     req.body.email
//   ];
//   db.query(sql, [values], (err, data, fields) => {
//     if (err) throw err;
//     res.json({
//       status: 200,
//       message: "New user added successfully"
//     })
//   })
// });



// // testing point
// router.get('/test', (req, res) => {
//   res.type('text/plain')
//   res.send('hello there, this is Computer.')
// })

// // custom 404 page
// router.use((req, res) => {
// res.type('text/plain')
// res.status(404)
// res.send('404 - Not Found')
// })

// // custom 500 page
// router.use((err, req, res, next) => {
//   console.error(err.message)
//   res.type('text/plain')
//   res.status(500)
//   res.send('500 - Server Error')
// })

// //Export to the router for later calls
// module.exports = router;