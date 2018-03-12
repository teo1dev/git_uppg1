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
renderMovie(movieData)