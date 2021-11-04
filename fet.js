//const fetch  = require ("node-fetch");

const { default: fetch } = require('cross-fetch');

require('cross-fetch/polyfill');

//import fetch from "node-fetch";
//Then = promesa
// res.json = transformamos
//Fetch = consume apis


/*fetch('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then(data =>{ 
    data.results.forEach(element => {
        console.log(element.name)
    });
 })
 .catch(error => console.log(error))*/


 //async awair
 /*const pokemones = async() => {
     try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        console.log(data.results)
     }catch(error){
        console.log(error)
     }
 }

 pokemones()*/

//const url="https://pokeapi.co/api/v2/pokemon/"

/*const pokemones = async()=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.results)
    }catch(error){
        console.log(error)
    }
}

pokemones()*/


//USO DE API -FUNCION MAP
/*const NombresPokemon = async()=>{
    try{

        const res = await fetch(url)
        const data = await res.json()
        //console.log(data.results)
        const arraynombres = data.results.map(nam => nam.name)
        console.log(arraynombres)

    }catch(error){
        console.log(error)
    }
}

NombresPokemon()*/

/*const NombresPokemon = async()=>{
    try{

        const res = await fetch(url)
        const data = await res.json()
        //console.log(data.results)
        const arraynombres = data.results.filter(nam => nam.name  === 'bulbasaur')
        console.log(arraynombres)

    }catch(error){
        console.log(error)
    }
}

NombresPokemon()*/
/*
const  url = "https://rickandmortyapi.com/api/character/"

const rick = async()=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        //const person = data.results.map(perso => perso.name)
        const persona = data.results.filter(perso => perso.name === "Rick Sanchez")
        console.log(persona)
    }catch(error){
        console.log(error)
    }
}

rick()*/