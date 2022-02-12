var counter =0;
var locCounter= document.getElementById("number-display");

function functionAdd(){
    counter++;
    locCounter.textContent=counter;
}

var pSaves = document.getElementById("previousSaves");
function functionSave(){

    pSaves.textContent+=counter + " - ";
    locCounter.textContent=0;
    counter=0;
}