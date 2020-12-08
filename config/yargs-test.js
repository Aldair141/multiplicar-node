const conf_command = {
    base: {
        alias: 'b',
        demand: true
    },
    limite: {
        alias: 'l',
        default: 12
    }
};

const argv = require('yargs').command("crear", "Imprimir en un txt la tabla de multiplicar", conf_command)
    .command("listar", "Muestra en consola la tabla de multiplicar", conf_command).help().argv;

module.exports = {
    argv
}