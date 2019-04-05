const hbs = require('hbs');
//helpers se usa en el footer hbs
//sirve para poder llamar una funcion dentro del hbs
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});



hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});

//esto no se necesita importar