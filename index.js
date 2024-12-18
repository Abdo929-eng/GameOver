 
import { Home } from "./home.js";


const newHome=new Home()













/*
 cont.addEventListener('click' , function(e){
   if(e.target.tagName==="IMG"){
   
   lightContainer.classList.remove("d-none");
   
   let currentSrc=e.target.getAttribute('src');
   boxItem.style.backgroundImage=`url('${currentSrc}')`;
   
   indexImg=imgList.indexOf(e.target);
   }
   
   
   })































/*
 getApiData();
let arr=[];
async function getApiData(){
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b9e9182a10mshb3c988b38f7dab4p1d966djsn8c887b53aaa2',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
         arr = await response.json();
         displayDate();
         console.log(arr);
    } catch (error) {
        console.error(error);
    }
}

function displayDate(){
    let container="";

for(let i=0;i<arr.length;i++){
container+=`<div class="col-sm-6 col-md-4 col-lg-3 scal">
                <div data-id="572" class="card h-100 bg-transparent" role="button">
                   <div class="card-body text-white">
                      <figure class="position-relative">
                         <img class="card-img-top object-fit-cover h-100" src="${arr[i].thumbnail}">
                      
                      </figure>
          
                      <figcaption>
          
                         <div class="hstack justify-content-between">
                            <h3 class="h6 small">${arr[i].title.split(" ", 2).join(" ")}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                         </div>
          
                         <p class="card-text small text-center opacity-50">
                         ${arr[i].short_description.split(" ", 5).join(" ")}
                         </p>
          
                      </figcaption>
                   </div>
          
                   <footer class="card-footer small hstack justify-content-between">
          
                      <span class="badge badge-color btn btn-dark">${arr[i].genre}</span>
                      <span class="badge badge-color btn btn-dark">${arr[i].platform}</span>
          
                   </footer>
                </div>
             </div>

`

}

document.getElementById("ess").innerHTML=container;

}*/