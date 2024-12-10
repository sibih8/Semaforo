function generateRandomInteger(min , max){
    let numero = Math.random()
    numero = numero*(max - min + 1) + min
    let intero = Math.floor(numero)
    return intero
}


function DiventaRosso() {
    setTimeout(function() {
        luce1.classList.replace("spenta", "rosso");
    }, 1000);

    setTimeout(function() {
        luce2.classList.replace("spenta", "rosso");
    }, 2200);

    setTimeout(function() {
        luce3.classList.replace("spenta", "rosso");
    }, 3400);

    setTimeout(function() {
        luce4.classList.replace("spenta", "rosso");
    }, 4300);
}
 

function DiventaVerde(){
    luce1.classList.replace("rosso", "verde");
    luce2.classList.replace("rosso", "verde");
    luce3.classList.replace("rosso", "verde");
    luce4.classList.replace("rosso", "verde");
    wait = true; 
    startTime = Date.now(); 
}


function resetLuci() {
    luce1.classList.replace("verde", "spenta");
    luce2.classList.replace("verde", "spenta");
    luce3.classList.replace("verde", "spenta");
    luce4.classList.replace("verde", "spenta");
    wait = false; 
    start.disabled = false;
}



let start = document.querySelector("#start");
let luce1 = document.querySelector("#luce-1");
let luce2 = document.querySelector("#luce-2");
let luce3 = document.querySelector("#luce-3");
let luce4 = document.querySelector("#luce-4");
let type = document.querySelector("#riflessi");
let typeTime = document.querySelector("#time");
let wait = false; 
let startTime;


start.addEventListener("click", function () {
    if (!wait) {
       
        resetLuci(); 
        let delay = generateRandomInteger(4500, 6000); 
        type.innerHTML = "Pronti...";
        DiventaRosso();
        setTimeout(DiventaVerde, delay); 
    } 
    else {
        let Riflessi = (Date.now() - startTime);
        type.innerHTML = "Tempo di reazione: " + Riflessi + "ms"; 
        start.disabled = true; 
        setTimeout(resetLuci, 3000); 
    }
});

