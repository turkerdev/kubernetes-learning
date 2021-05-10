const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.listen(3000)

app.get('/yes', (req, res) => {
    res.json('yesbro')
})