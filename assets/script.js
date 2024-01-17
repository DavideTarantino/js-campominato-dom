const grigliaHtml = document.getElementById('griglia')
let startinput = document.getElementById( 'start')
let arrayBombe = []
let celleTotali = 84
let celleCliccate = 0

do {

    let randomNum = randomica(100)

    if (!arrayBombe.includes(randomNum)) {

        arrayBombe.push(randomNum)
    }


} while (arrayBombe.length !== 16)

console.log(arrayBombe);

startinput.addEventListener('click', function(){
    document.getElementById("tabella").style.display = "block";
})

for (let i = 1; i <= 100; i++) {

    let box = document.createElement("div")

    box.classList.add("box")

    box.innerHTML = `<span>${i}</span>`

    box.addEventListener('click', function () {
        if(arrayBombe.includes(i)){
            box.classList.add('rosso')
            setTimeout(function(){
              alert("hai perso :(")
              window.location.reload();  
            }, 100);
        }else{
            box.classList.add('verde')
            celleCliccate++
        }       
        
        if(celleCliccate == celleTotali){          
            setTimeout(function(){
                alert("hai vinto")
                window.location.reload();  
            }, 100);
        }  
    })

    grigliaHtml.append(box)

}

function randomica(max) {
    return Math.floor(Math.random() * max) + 1
}

