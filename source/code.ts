import * as $ from "jquery";
import {movieData} from "./data";
// tslint:disable-next-line:no-shadowed-variable
function renderMovie(movieData) {
    $("#image").attr("src", movieData.image);
    $("#movietitle").text(movieData.title);
    $("#short").text(movieData.short);

    let actorList = "";
    // console.log("WTH", movieData);

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < movieData.actors.length; i++) {
        actorList += "<li>" + movieData.actors[i] + "</li>";
    }
    $("#actors").html(actorList);
}

function changeStarRating(rating) {
    for (let i = 1; i <= 5; i++) {
      // tslint:disable-next-line:prefer-const
      let star = $("#star" + i);
      if (i <= rating) {
        star.addClass("filled");
      } else {
        star.removeClass("filled");
      }
    }
  }

 // -------------------------------------------------------
let currentRating;

for (let i = 1; i <= 5; i++) {
    const star = $("#star" + i);
    // tslint:disable-next-line:only-arrow-functions
    star.on("click", function() {
        currentRating = i;
        changeStarRating(i);
    });
    // tslint:disable-next-line:only-arrow-functions
    star.on("mouseover", function() {
        changeStarRating(i);
    });
    // tslint:disable-next-line:only-arrow-functions
    star.on("mouseout", function() {
        changeStarRating(currentRating);
    });
  }

renderMovie(movieData);

// tslint:disable-next-line:no-console
// console.log("HAHA!");
