
import { Detailss } from "./details.js";
import { Ui } from "./ui.js";

export class Home{

 constructor(){
    
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener('click',()=>{
              
            this.changeActive(link)
            const categoryData=link.getAttribute("data-category")
            this.getApiData(categoryData)
        })
    });
    this.loading=document.querySelector(".loading")
    
    this.getApiData("mmorpg")
 }
 
   async changeActive(link){
    document.querySelector(".nav-item .active").classList.remove("active");
    link.classList.add("active");    
    
   } 
    
  async getApiData(cat){

          this.loading.classList.remove("d-none")
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b9e9182a10mshb3c988b38f7dab4p1d966djsn8c887b53aaa2',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            },
        };
        
        
            const response = await fetch(url, options);
            const arr = await response.json();
            this.loading.classList.add("d-none")
            new Ui().displayDate(arr)
            
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener('click',()=>{
              document.querySelector(".sec1").classList.add("d-none");
              document.querySelector(".sec2").classList.remove("d-none");
              new Detailss(card.getAttribute("data-id"))
            
        })
    });
            

            console.log(arr);
        
        
        
    }


    }























/*
try {
    loading.classList.remove("d-none")
let respons = await ( await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)).json();
arr=respons.recipes;
display();
loading.classList.add("d-none")
alert.classList.add("d-none")
} catch (error) {
    console.log(error);
    loading.classList.add("d-none")
    alert.classList.remove("d-none")
}

}*/