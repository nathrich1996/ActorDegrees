

function startDegrees(){

    fetch("https://data-imdb1.p.rapidapi.com/actor/imdb_id_byName/Pacino/", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "b871d38f13msh1e3945195ee01d1p1d8da7jsn2424d81f7ee1"
    }
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.error(err);
});
}


function clearText(){
  document.getElementById("textArea").value = "";
  document.getElementById("res").innerHTML = "";
}
