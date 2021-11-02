//FUNCIONES DE UNA TABLA DE MULTIPLICAR CON CONST

/*function sumar(){
    const num1 = 11
    const num2 = 11

    console.log(num1+num2)
}
function resta(){
    const num1 = 5
    const num2 = 2

    console.log(num1-num2)
}

function multiplicar(){
    const num1 = 2
    const num2 = 2

    console.log(num1*num2)
}

function dividir(){
    const num1 = 50
    const num2 = 5

    console.log(num1/ num2)
}

sumar()
resta()
multiplicar()
dividir()*/

//FUNCIONES MAS BREVE 

/*const num1 = 5
const num2 = 5

function sumar(){
    console.log(num1+num2)
}
function restar(){
    console.log(num1-num2)
}
function multiplciar(){
    console.log(num1*num2)
}
function dividir(){
    console.log(num1/num2)
}

sumar()
restar()
multiplciar()
dividir()*/

//FUNCIONES CON UN ARRAY

/*const numero = [5,5]

function sumar(){
    //numero.push(6)
    console.log(numero[0]+numero[1])
}
function restar(){
    console.log(numero[0]-numero[1])
}
function multiplciar(){
    console.log(numero[0]*numero[1])
}
function dividir(){
    console.log(numero[0]/numero[1])
}

sumar()
restar()
multiplciar()
dividir()
*/

/*const numero = {
    num1: 5,
    num2: 5
}

function sumar(){
    //numero.num3 = 6
    console.log(numero.num1+numero.num2)
}
function restar(){
    console.log(numero.num1-numero.num2)
}
function multiplciar(){
    console.log(numero.num1* numero.num2)
}
function dividir(){
    console.log(numero.num1/numero.num2)
}
sumar()
restar()
multiplciar()
dividir()
*/

//FUNCIONES DE PROMEDIO DE NOTAS

/*const nota1 =11
const nota2 =12
const nota3 =08*/

/*const notas = [11,12,18]
const resultado = (notas[0]+notas[1]+notas[2])/3

function promedio (){
    if(resultado>=0 && resultado<=10.5){
        console.log("El alumno desaprobo y su nota es : " , resultado )
    }if(resultado>=10.6 && resultado<=21){
        console.log("El alumno aprobo y su nota es :", resultado)
    }
}
promedio();*/


//FUNCIONES DE PROMEDIO POR PARAMETROS
/*
function promedio (num1,num2,num3){
    const resultado = (num1+num2+num3)/3
    if(resultado>=0 && resultado<=10.5){
        console.log("El alumno desaprobo y su nota es : " , resultado )
    }if(resultado>=10.6 && resultado<=21){
        console.log("El alumno aprobo y su nota es :", resultado)
    }
}
promedio(18,14,20)*/

//FUNCIONES CON FLECHAS 

/*const promedio = (num1,num2,num3) =>{
    const resultado = (num1+num2+num3)/3
    if(resultado>=0 && resultado<=10.5){
        console.log("El alumno desaprobo y su nota es : " , resultado )
    }if(resultado>=10.6 && resultado<=21){
        console.log("El alumno aprobo y su nota es :", resultado)
    }
}
promedio(18,14,20)*/

//CON UN PARAMETRO
/*const usuario = (nombre)=>{
    console.log(nombre)
}*/
/*
const suma = (num1,num2)=>(num1+num2)

const resultado = suma(1,2)

console.log(resultado)*/

/*const saludo = nombre=> ("Bienvenido "+ nombre)

const resultado = saludo("Edmilson")

console.log(resultado)*/

/*const saludo = (nombre = "(nombre no escrito)") =>{
    console.log("Bienvenido " + nombre)
}

saludo()*/
