
import express from 'express'
import cors from 'cors'



const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

console.log('mensaje de prueba')


app.get('/api/productos', (req, res) => {
    console.log("me llego una nueva solicitud")
    const productos = ['Cappuccino Supremo', 'Medialuna con Dulce de Leche', 'Tostado de jamón y queso', 'Licuado de Frutilla'];
    res.json({
        productos
    });
});

app.get('/api/promo', (req, res) => {
    console.log("me llego una nueva solicitud")
    res.json({
        promo: "¡Hoy 2x1 en licuados de frutilla!",
        hasta: "21:00 hs"
    });
});
app.get('/api/horarios', (req, res) => {
    console.log("me llego una nueva solicitud")
    res.json({
        lunes_a_Viernes: "08:00 a 20:00",
        sabados: "09:00 a 13:00",
        domingos: "Cerrado"
    });
});

app.listen(PORT, () => {console.info (`servidor activo en el puerto ${PORT}`)})