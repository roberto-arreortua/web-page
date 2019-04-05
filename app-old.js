const http = require('http'); //este requiere no lo instaamos ya viene en node por defecto 

//Esta función se utiliza para crear un servidor 
//se declaran los puertos de salida del localhost

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'applicaction/json' });

        let salida = {
            nombre: 'Roberto',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');