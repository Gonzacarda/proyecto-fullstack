const { clear } = require('console');
let fs = require ('fs')




let tareasJSON = fs.readFileSync ('tareas.json', 'utf-8')

let tareas = JSON.parse (tareasJSON);

//console.log (tareas);


for (let i = 0; i < tareas.length; i++) {
    console.log(tareas [i].titulo)
    
}