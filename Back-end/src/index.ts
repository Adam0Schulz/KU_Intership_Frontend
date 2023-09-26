import express from 'express'
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (_, res) => {
    res.status(200).send({ "text": "test" })
})

app.listen(port, () => console.log(`Running on port ${port}`))
