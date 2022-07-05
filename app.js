const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/helloWorld');
const helloWorld = mongoose.model('helloWorld', new mongoose.Schema({ text: 'string' }), "helloWorld");git

app.get('/', async (req, res) => {
  const results = await helloWorld.find({});
  console.log(results);
  res.send(results[0].text)
})

app.get('/a', async (req, res) => {
  const results = await helloWorld.find({});
  res.send(results[1].text + ' person' )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
