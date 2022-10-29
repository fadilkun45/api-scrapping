const express = require('express')
const cors = require('cors')
const quoteController = require('./quote')
const pixiv = require('./pixiv')
const search = require('../search')
const serverless = require('serverless-http')

const app = express()

app.use(cors())

app.get('/quote',async (req,res)  => {
   const quote = await quoteController()
   res.json(quote)
})

app.get('/', async (req,res) => {
   res.json({message: 'hallo gan', pixiv: '/pixiv (jadwal adzan)', quote: '/quote (quote) '  })
})

app.get('/pixiv', pixiv)

app.get('/search', search)


app.listen(4500)


module.exports = app