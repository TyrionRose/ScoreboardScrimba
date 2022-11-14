let countL= 0;
let countR=0;
 let leftEl= document.getElementById("scoreTextL") 
let rightEl=document.getElementById("scoreTextR")
function addOneL (){
    countL+= 1
    leftEl.textContent= countL
    
}

function addTwoL (){
    countL+= 2
    leftEl.textContent= countL
}

function addThreeL(){
    countL+= 3
    leftEl.textContent= countL
}


function addOneR (){
    countR+= 1
    rightEl.textContent= countR
    
}

function addTwoR (){
    countR+= 2
    rightEl.textContent= countR
}

function addThreeR(){
    countR+= 3
    rightEl.textContent= countR
}