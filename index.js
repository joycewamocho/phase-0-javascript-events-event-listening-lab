const input = document.getElementById('button')
function alertMe(){
    alert("I was clicked!")
}

function addingEventListener() {
input.addEventListener("click", alertMe);
    
}

addingEventListener();
