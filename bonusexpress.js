const express = require('express')
const app = express()

const parametros = {
id : {
demand : true,
alias : 'i'
},
nombre : {
demand : true,
alias : 'n'
},
cedula : {
demand : true,
alias : 'c'
}

}

const COMANDO_INSCRIBIRSE = 'inscribir'

const argv = require('yargs')
.command(COMANDO_INSCRIBIRSE,'Prematricula del usuario en el curso virtual', parametros)
.argv
const fs = require('fs');


let cursos = [{
 id: '1',
 nombre: 'circuitos',
 duracion: 360,
 valor: 350000
 },
{
 id: '2',
 nombre: 'devops',
 duracion: 500,
 valor: 200000
 },
 {
 id: '3',
 nombre: 'databases',
 duracion: 100,
 valor: 500000
 }];

var offset = 0;

let cursoMostrar = (idcurso, callback) => {
	setTimeout(function(){
		let cur = cursos.find(curso => curso.id == idcurso);
		callback(cur);},2000+offset);
		offset += 2000;
}


let crearArchivo =(id,nombre,cc ) =>{
let cur = cursos.find(curso => curso.id == id);
if( cur == null){
console.log("No se ha encontrado curso con id " + id);
return;
}
  texto = 'el estudiante ' + nombre + ' identificado con cedula '+ cc  + ' se ha matriculado en el curso ' + cur.nombre +  ' que tiene una duración de '+ cur.duracion + ' horas y un valor de ' + cur.valor + ' pesos';

}

if(argv._[0] != COMANDO_INSCRIBIRSE){
cursoMostrar(1,function(cur){console.log('El identificador(id) del curso es ' + cur.id + ', el nombre es: ' + cur.nombre + ' tiene una duración de '+ cur.duracion + ' horas y un valor de ' + cur.valor + ' pesos')});

cursoMostrar(2,function(cur){console.log('El identificador(id) del curso es ' + cur.id + ', el nombre es: ' + cur.nombre + ' tiene una duración de '+ cur.duracion + ' horas y un valor de ' + cur.valor + ' pesos')});

cursoMostrar(3,function(cur){console.log('El identificador(id) del curso es ' + cur.id + ', el nombre es: ' + cur.nombre + ' tiene una duración de '+ cur.duracion + ' horas y un valor de ' + cur.valor + ' pesos')});
}else{
crearArchivo(argv.i,argv.n,argv.c);
}


app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)
