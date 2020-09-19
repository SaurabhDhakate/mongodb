const express = require('express')
const app = express()

const port = process.env.PORT || 8020


app.use(express.static('./public'))

app.listen(port)
