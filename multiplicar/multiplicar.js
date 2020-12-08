//Requireds
const fs = require('fs'); //Ya existe en node
//const fs = require('express'); -> Se instala y posteriormente se usa (no nativo)
//const fs = require('./fs'); -> Archivo que hemos incluído en el proyecto

let listarTabla = (base, limite = 12) => {
    let error = false;
    let errores = "";
    if (!Number(base)) {
        error = true;
        errores = "base"
    }

    if (!Number(limite)) {
        if (error) {
            errores = " y límite";
        } else {
            errores = "límite";
        }
        error = true;
    }

    if (error) {
        console.log(errores);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let generarTabla = (base, limite = 12) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido (${base}) no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                //resolve(`El archivo tabla-${ base }.txt ha sido creado`);
                resolve(`tabla-${ base }.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo: generarTabla,
    listarTabla
};

//module.exports = { atributo: funcion }
//Declarar la función como module.exports.funcion