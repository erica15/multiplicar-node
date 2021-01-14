const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTable } = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {
    case 'listar': //node app -b 2 -l 3  o node app --limite 3 --base 4
        listarTable(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: `, colors.rainbow(`${archivo}`));
            })
            .catch((error) => {
                console.log(error);
            });
        break;

    default:
        console.log('comando no reconocido');

}

//console.log(multiplicar);
//console.log(process.argv);
/*
let argv = process.argv;

let parametro = argv[2];


let base = parametro.split("=")[1]; */

/*
let argv2 = process.argv;
console.log(argv.base);
console.log('limite ', argv.limite);  */


//console.log(base);

//const fs = require('fs'); //nativo de node
//const fs = require('express');  //de otras personas
//const fs = require('./fs');  //de nosotros

//let base = 'hola';

//console.log(module);