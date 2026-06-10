
import express from 'express'
import cors from 'cors'
import express from 'express'


const app = express()
const PORT = 3000

app.use(cors())
app.uese (express.json())

console.log('mensaje de prueba')


app.get('/api/productos', (req, res) => {
    const productos = ["Cappuccino Supremo", "Medialuna con Dulce de Leche", "Tostado de jamón y queso", "Licuado de Frutilla"];
    res.status(200).json(productos);
});


app.get('/api/promo', (req, res) => {
    res.status(200).json({
        promo: "¡Hoy 2x1 en licuados de frutilla!",
        validoHasta: "21:00 hs"
    });
});

app.get('/api/horarios', (req, res) => {
    res.status(200).json({
        lunesAViernes: "08:00 a 20:00",
        sabados: "09:00 a 13:00",
        domingos: "Cerrado"
    });
});

app.listen(PORT, () => {console.info (`servidor activo en el puerto ${PORT}`)})