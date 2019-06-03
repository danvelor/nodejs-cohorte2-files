const { argv } = require('./yargs');
const functions = require('./functions');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        functions.create(argv);
        break;

    case 'show':
        functions.show(argv);
        break;

    case 'update':
        functions.update(argv);
        break;

    case 'deleted':
        functions.deleted(argv);
        break

    default:
        console.log(command + ' nonexistent command');
        break
}