const express = require('express');
const app = express();
const hbs = require('hbs'); //para los templates parciales estaticos


require('./hbs/helpers'); //importamos por asi decirlo 

//configuracion para saber que puerto vamos a usar en heroku
const port = process.env.PORT || 3000; // or

//midel  wer es un archivo url que se ejecutara

app.use(express.static(__dirname + '/public')); //la carpeta de datos estaticos que creamos

//Express HBS engine  __dirname es para no espesificar el pad
hbs.registerPartials(__dirname + '/views/parciales'); //carga los templates estaticos
app.set('view engine', 'hbs'); //metodo para usar los urls



//http:/localhost:3000/home.html
/* este es un servicio rest de un JSON */
app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'roBerTo' //esto se capitaliza Roberto
            //, anio: new Date().getFullYear()
    });
});


app.get('/about', (req, res) => {

    res.render('about');
    /*
    res.render('about', {
        anio: new Date().getFullYear()
    });
    */
});



app.get('/data', (req, res) => {
    res.send('Hola data');
});

//app.listen(3000); //puerto se declara asi pero tambien puede haber un
app.listen(port, () => { // port antes era 3000 0 8080
    console.log(`Escuchando peticiones en el puerto ${port}`);
});

//nodemon server -e js,hbs,ccs,etc para que est al pendiente