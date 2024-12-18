import { Ui } from "./ui.js";

export class Detailss{
    constructor(id){
      
        
            document.querySelector(".btn-close").addEventListener('click',()=>{
                  document.querySelector(".sec1").classList.remove("d-none");
                  document.querySelector(".sec2").classList.add("d-none");
    
                
            })
     this.loading=document.querySelector(".loading")

      this.getApiDetails(id);
      

    }

    
        async getApiDetails(id){

    this.loading.classList.remove("d-none")

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b9e9182a10mshb3c988b38f7dab4p1d966djsn8c887b53aaa2',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    
        const response = await fetch(url, options);
        const arr = await response.json();

         this.loading.classList.add("d-none")

        console.log(arr);
        new Ui().DisplayDetails(arr);
    
    }
}
