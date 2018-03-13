function renderMovie(movieData){
    document.getElementById("image").setAttribute("src", movieData.image);
    document.getElementById("movietitle").innerText=movieData.title;
    document.getElementById("short").innerText=movieData.short;

    let actorList="";
    for(let i=0; i<movieData.actors.length; i++){
        actorList+="<li>"+movieData.actors[i]+"</li>";
    }
    document.getElementById("actors").innerHTML=actorList;
}

function changeStarRating(rating){
    for(let i=1; i<=5; i++){
      let star = document.getElementById("star" + i);
      if (i <= rating){
        star.classList.add("filled");
      } else {
        star.classList.remove("filled");
      }
    }
  }
  
  for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function(){
      changeStarRating(i);
    });
  }

renderMovie(movieData)