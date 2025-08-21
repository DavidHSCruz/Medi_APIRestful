import express from 'express'
import pkg from 'body-parser'
import router from './routes/router.js'
import db from './database/database.js'

const PORT = process.env.PORT || 3000

const app = express()
const { json, urlencoded } = pkg

app.use(json())
app.use(urlencoded({extended: true}))

app.listen(PORT, () => {
  console.log(`Escutando a porta ${PORT}`)
})

app.use('/', router)
