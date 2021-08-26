

function startDegrees(){
  document.getElementById("res").innerHTML = rot13(document.getElementById("textBox").value.toUpperCase());
    
}


function clearText(){
  document.getElementById("textArea").value = "";
  document.getElementById("res").innerHTML = "";
}
