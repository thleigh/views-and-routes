const express = require('express')
const path = require('path')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './HTML', 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './HTML', 'about.html'))
})


app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, './HTML', 'blog-directory.html'))
})

app.listen(8000)