const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');
const fs = require('fs');
 
yargs.command({
    command:'add',
    describe:'Adds new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'

        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
});

yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
});

yargs.command({
    command:'listNotes',
    describe:'List notes',
    handler(argv){
        notes.listNotes()
    }
});

yargs.command({
    command:'list',
    describe:'list notes',
    handler(){
        console.log('listing...');
    }
});


//console.log(chalk.bgGreen.black('------START--------'));
// console.log(notes.getNotes())
// console.log(process.argv[2])
yargs.parse();



