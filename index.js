let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
count = 0

function increment() {
    count += 1
    countEL.textContent = count
}


function save() {
    let countSTR = count + "-"
    saveEL.textContent += countSTR
    countEL.textContent = 0
    count = 0
}


