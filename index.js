const express = require('express');

const PORT = 80;
const app = express();

app.get('/', (req, res) => {
      res.end("Hello From Home Page Using Express")
})

app.get('/about', (req, res) => {
      res.end("Hello From Aboute Page")
})

app.listen(PORT, () => {
      console.log(`Server Run On PORT:${PORT}`)
})