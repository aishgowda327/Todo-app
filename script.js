const Note = document.querySelector("#note")
const List = document.querySelector('#list')
 

function AddingTask(){
    if(Note.value ===""){
        alert("You must write someThing")
    }
    else{
        let Li = document.createElement("li")
        Li.innerHTML = Note.value
        List.appendChild(Li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        Li.appendChild(span)
    }
    Note.value = ""
}

List.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})


