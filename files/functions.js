const fs = require('fs');
const colors = require('colors');
const log = console.log;
listStudents = [];

const create = (student) => {
    list();
    let stu = {
        name: student.name,
        math: student.math,
        english: student.english,
        programming: student.programming
    };
    let duplicate = listStudents.find(item => item.name == stu.name);
    if (duplicate) {
        log('Student existing'.red);
        return;
    }
    listStudents.push(stu);
    save();
}

const save = () => {
    let data = JSON.stringify(listStudents);
    fs.writeFile('list.json', data, (err) => {
        if (err) throw (err);
        log('file created with success'.green);
    })
}

const list = () => {
    try {
        listStudents = JSON.parse(fs.readFileSync('./list.json'));
    } catch (error) {
        listStudents = [];
    }
}

const show = (student) => {
    list();
    if (student.name) {
        let search = listStudents.find(item => item.name == student.name);
        if (!search) {
            log('Student no existing'.red);
            return;
        }
        listStudents = search
    }
    console.table(listStudents);
}

const update = (student) => {
    log('update' .bgYellow .black);
    list();
    let search = listStudents.find(item => item.name == student.name);
    if (!search) {
        log('Student no existing'.red);
        return;
    }

    if(!search[student.assignature]){
        log('assingnature no existing'.red);
        return;
    }

    search[student.assignature] = student.notes;
    save();
}

const deleted = (student) => {
    log('deleted' .bgYellow .black);
    list();
    let search = listStudents.filter(item => item.name != student.name);
    if(search.length == listStudents.length){
        log('Student no existing'.red);
        return;
    }
    listStudents = search;
    save();
}

module.exports = {
    create,
    show,
    update,
    deleted
}