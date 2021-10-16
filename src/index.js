const express = require('express')
const path = require('path')
const hbs = require("hbs");
const app = express()
const port = 8000

const statPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.use(express.static(statPath))
app.set("view engine", "hbs");
app.set("views", templatePath);

hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/feedback', (req, res) => {
  res.render('feedback')
})
app.get('*', (req, res) => {
  res.render('error')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})