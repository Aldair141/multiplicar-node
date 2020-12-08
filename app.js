//iMPORTAR
//YARGS
const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
}).command('crear', 'Genera una tabla de multiplicar y lo guarda en un archivo .txt', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 12,
        alias: 'l'
    }
}).help().argv;

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1];

// crearArchivo(base).then((response) => {
//     console.log(`Archivo creado: ${response}`);
// }, (error) => {
//     console.log(error);
// });

//console.log(argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then((response) => {
            console.log(`Archivo creado: ${response}`);
        }, (error) => {
            console.log(error);
        });
        break;
    default:
        console.log("Comando no reconocido");
        break;
}