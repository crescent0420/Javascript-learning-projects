let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ""){
        alert("you must enter a task!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("check");
        li.appendChild(span);
    }
    inputBox.value = ""; // clear the input box after adding a task
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){ 
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
}}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML );
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();