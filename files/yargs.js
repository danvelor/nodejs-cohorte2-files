const name = {
    demand: true,
    alias: 'n'
}


const math = {
    demand: true,
    alias: 'm'
}

const english = {
    demand: true,
    alias: 'i'
}

const programming = {
    demand: true,
    alias: 'p'
}

const creation = {
    name,
    math,
    english,
    programming
}

const showByName = {
    name : {
        alias: 'n'
    }
}

const assignature = {
    demand:true,
    alias: 'a'
}

const notes = {
    demand:true,
    alias: 'c'
}

const update = {
    name,
    assignature,
    notes
}

const deleted = {
    name
}

const argv = require('yargs').command('create', 'it creates a new student', creation)
    .command('show', 'it showes the students and their notes',showByName)
    .command('update','it updates the students notes',update)
    .command('deleted','it deletes a student',deleted)
    .argv;

module.exports = {
    argv
}
