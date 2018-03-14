let movieData = require("./data.js");
let $=require("jquery");
function renderMovie(movieData){
    $("#image").attr("src", movieData.image);
    $("#movietitle").text(movieData.title);
    $("#short").text(movieData.short);

    let actorList="";
    console.log("WTH", movieData);
    for(let i=0; i<movieData.actors.length; i++){
        actorList+="<li>"+movieData.actors[i]+"</li>";
    }
    $("#actors").html(actorList);
}

function changeStarRating(rating){
    for(let i=1; i<=5; i++){
      let star = $("#star" + i);
      if (i <= rating){
        star.addClass("filled");
      } else {
        star.removeClass("filled");
      }
    }
  }
  
  //-------------------------------------------------------
let currentRating;

  for(let i=1; i<=5; i++){
    let star = $("#star" + i);
    star.on("click", function(){
        currentRating=i;
      changeStarRating(i);
    });
    star.on("mouseover", function(){
        changeStarRating(i);
    });
    star.on("mouseout", function(){
        changeStarRating(currentRating);
    });
  }

renderMovie(movieData);

console.log("HAHA!")