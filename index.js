const express = require('express')
const app = express()

const port = 8020 || process.env.PORT


app.use(express.static('./public'))

app.listen(port)