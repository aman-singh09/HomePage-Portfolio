const express = require('express');
const app = express();
const port = 5000

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/scripts',express.static(__dirname + 'public/scripts'))

app.set('views', './views');
app.set('view engine','ejs');



app.get('/', (req, res) => {
  res.render('index')
})

app.get('/home',(req,res)=> {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})