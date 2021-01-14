const fs = require('fs');
var colors = require('colors');


let listarTable = (base, limite) => {

    console.log(`**********************************`.blue);
    console.log(`*********Tabla de ${base}*******`.white);
    console.log(`**********************************`.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }



        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (error) => {
            if (error) {
                rejects(error);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }

        });


    });
}

module.exports = {
    crearArchivo,
    listarTable
}