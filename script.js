const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something :)");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new li element to the list container
        listContainer.appendChild(li);

        // Create a new span element and set its content to the '×' symbol
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); // Append the span to the li element
    }

    // Clear the input field
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},  false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();