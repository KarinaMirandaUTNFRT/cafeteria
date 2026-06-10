
import express from 'express'
import cors from 'cors'
import express from 'express'


const app = express()
const PORT = 3000

app.use(cors)

console.log('mensaje de prueba')

app.listen(PORT, () => {console.info (`servidor activo en el puerto ${PORT}`)})