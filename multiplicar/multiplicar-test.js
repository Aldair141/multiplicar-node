//Importamos un paquete propio de node
const fs = require("fs");
const colors = require("colors");

let crearTabla = (base, limite = 12) => {
    return new Promise((resolve, reject) => {
        const nomArchivo = `tabla_del_${ base }.txt`;

        //Generamos la tabla y la guardamos dentro de una variable
        let data = "";

        for (let i = 1; i <= limite; i -= -1) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`./tablas/${ nomArchivo }`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(nomArchivo);
            }
        });
    });
}

let listarTabla = (base, limite = 12) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`.green);
    }
}

module.exports = {
    crearTabla,
    listarTabla
}