export class Ui{
    
   constructor(){
      
   }

 displayDate(data){
    let Box="";

for(let i=0;i<data.length;i++){
Box+=`<div class="col-sm-6 col-md-4 col-lg-3 scal data-id="${data[i].id}">
                <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button">
                   <div class="card-body text-white">
                      <figure class="position-relative">
                         <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}">
                      
                      </figure>
          
                      <figcaption>
          
                         <div class="hstack justify-content-between">
                            <h3 class="h6 small">${data[i].title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                         </div>
          
                         <p class="card-text small text-center opacity-50">
                         ${data[i].short_description}
                         </p>
          
                      </figcaption>
                   </div>
          
                   <footer class="card-footer small hstack justify-content-between">
          
                      <span class="badge badge-color btn btn-dark">${data[i].genre}</span>
                      <span class="badge badge-color btn btn-dark">${data[i].platform}</span>
          
                   </footer>
                </div>
             </div>

`

}

return document.getElementById("ess").innerHTML=Box;

}








   
 DisplayDetails(data){
    
   
   document.getElementById("eef").innerHTML=`
            <div class="col-sm-6 card h-25 p-0 border-0">
            <div class="w-100">
               <img class="w-100" src="${data.thumbnail}" alt="">
            </div></div>
            <div class="col-sm-6">
                <div class="inner text-white">
                    <h2>Title:${data.title}</h2>
                    <h2>Category:${data.genre}</h2>
                    <h2>Platform:${data.platform}</h2>
                    <h2>Status:${data.status}</h2>
                    <p class="title">${data.description}</p>
                    <button class="btn btn-primary bg-transparent">show Game</button>
                </div>

             </div>
   
   
   `
   
   

}
}

