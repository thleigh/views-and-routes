const express = require('express')
const app = express()

//tell express that we're going to use
//ejs as the view engine
app.set('view engine', 'ejs')

//home route!
// app.get('/', (req, res) => {
//     res.render('index') //express will look inside views folder by default for an ejs file with this name
// })

app.get('/', (req, res) => {
    res.render('index', {name: "Sterling Archer", age: 35})
    // res.sendFile(path.join(__dirname, './views', 'index.html'))
})

app.get('/about', (req, res) => {
    res.render('about', {fave: ['music', 13, 'SEI']})
    // res.sendFile(path.join(__dirname, './views', 'about.html'))
})

app.get('/blog', (req, res) => {
    res.render('blog-directory')
    // res.sendFile(path.join(__dirname, './views', 'blog-directory.html'))
})

app.listen(8000)