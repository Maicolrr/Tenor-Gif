//"AIzaSyDvh8iZ3UTRKBd5COkyPOME38gWhcru9Mo"

const containerCart = document.getElementById("containerCart")
const Search = document.getElementById("Search")

window.addEventListener('DOMContentLoaded', () => {
    renderGif()
});

//generador de gif
function renderGif(){
    
    //traer informacion del fetch
    fetch('https://tenor.googleapis.com/v2/search?q=amor&key=AIzaSyDvh8iZ3UTRKBd5COkyPOME38gWhcru9Mo')
    .then(response => response.json())
    .then(data => { 
        
        // console.log(data.results);
        data.results.forEach(element => {
            
            createCart(element)
            
        });       
    })  
}

//buscador
Search.addEventListener('keyup',()=>{
    
    if(Search.value==""){
        
        createCart(element)

    }else{

        containerCart.innerHTML= '';
        fetch('https://tenor.googleapis.com/v2/search?q='+Search.value+'&key=AIzaSyDvh8iZ3UTRKBd5COkyPOME38gWhcru9Mo')
        .then(response =>response.json())
        .then(data => { 
            
            data.results.forEach(element => {
                
                createCart(element)
                
            }); 
            
        })
    }
})



function createCart(element){

    const gif = document.createElement('img')
    gif.className +="gif"
    gif.src = element.media_formats.gif.url

    containerCart.appendChild(gif);
}