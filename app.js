const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

// Seteamos el motor de plantilla
app.set('view engine', 'ejs')

// Seteamos la carpeta publica para archivos estaticos
app.use(express.static('public'))

// Para procesar los datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// seteamos la variables de entorno
dotenv.config({path: './env/.env'})

// para poder trabajar con las cookies
// app.use(cookieParser)

// app.get('/', (req, res) =>{
//     res.render('index')
// })

// llamar al router
app.use('/', require('./routes/router'))

app.listen(3000, ()=>{
    console.log('SERVER UP runnuing in http://localhost:3000')
})

