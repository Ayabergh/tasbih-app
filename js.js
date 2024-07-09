let countEl =document.getElementById('count-el');
let count=0;

function inc(){
    count+=1
    countEl.innerText=count
}
function zero(){
    count=0
    countEl.innerText=count
}