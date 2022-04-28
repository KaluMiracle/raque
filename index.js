
import express, { json } from 'express'
import appRouter from './routes/app.js'
const app = express()



app.use(json())

const showIndex = () => {
    return index
}

app.use('/app', appRouter)
app.use('/', (req, res) => {
    res.sendFile( "C:/Users/miracle/Documents/creativeTech/rarque/index.html")
} )

app.listen(80, () => console.log('Server Started'))