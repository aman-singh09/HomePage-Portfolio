const express = require('express');
const app = express();
const port = 5000

app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/home',(req,res)=> {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)

})