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