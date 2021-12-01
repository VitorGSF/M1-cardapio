const express = require('express')
app = express()

app.use(express.static('dist'))

app.listen(3030, () => {
    console.log('APP listening at http://localhost:3030')
})