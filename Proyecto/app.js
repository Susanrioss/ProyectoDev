const mongoose = require('mongoose')

const url = 'mongodb://localhost/Login'//Pon el nombre de tu base de datos

mongoose.connect(url, {

})
.then( () => console.log('Conectado a Mongo') )
.catch( (e) => console.log('El error de conexión es: ' + e))