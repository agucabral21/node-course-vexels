const chalk = require('chalk');
const fs = require('fs');
const { totalmem } = require('os');

const addNote = (title,body) => {
    
    const notes = loadNotes()
    const duplicateNode = notes.find(note =>note.title === title) 

    if(!duplicateNode){
        notes.push({
                title:title,
                body:body
            })
        saveNotes(notes)
        console.log("Added")
    }else{
        console.log("Duplicated")
    }

}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.green.bgBlackBright("Your Notes"))
    return notes.map((note,i) => console.log(chalk.green((i+1) +" "+ note.title))) 

}

const loadNotes = ()=>{
    try{
        var dataBuffer = fs.readFileSync('notes.json')
        var notesJson = dataBuffer.toString()
        return JSON.parse(notesJson)
    }catch(e){
        return []
    }
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find(note =>note.title === title) 

    if(note){
                    console.log(chalk.green.bgRed(note.title))
                    console.log(note.body)
    }else{console.log(chalk.red('notFound'))}

}

const removeNote = (title) => {   
    const notes = loadNotes()
    const keepNotes = notes.filter(note =>note.title !== title) 
    saveNotes(keepNotes)
    if(notes.length === keepNotes.length){
        console.log(chalk.red('Not found'))
    }else{ 
        console.log(chalk.green('Removed: '+title));
    }
}

const saveNotes = (notes) =>{
    var json = JSON.stringify(notes)
    fs.writeFileSync('notes.json',json)
}

module.exports = {
   
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}