function startDegrees(){

    fetch("https://data-imdb1.p.rapidapi.com/actor/imdb_id_byName/Pacino/", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": ""
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
