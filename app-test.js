const { argv } = require("./config/yargs-test");
const { crearTabla, listarTabla } = require("./multiplicar/multiplicar-test");
const colors = require("colors");

const comando = argv._[0];

switch (comando) {
    case "crear":
        crearTabla(argv.base, argv.limite).then((response) => {
            console.log(colors.green(`Archivo creado: ${ response }`));
        }, (err) => {
            console.log(colors.red("Error: " + err));
        });
        break;
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log(colors.red("Este comando no es válido"));
        break;
}