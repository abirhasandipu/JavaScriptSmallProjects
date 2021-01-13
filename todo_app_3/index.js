
//add todo to list

function newElement(){

    

    var inputValue = document.querySelector("#input").value;
    
    var newListItem = document.createElement("li"); //new list element created
    var textInTheLi = document.createTextNode(inputValue); //what goes in the new list element
    newListItem.appendChild(textInTheLi);

    if (inputValue === '0'){
        alert("Please insert a todo...");
    }
    else {
        document.getElementById("todo-list").appendChild(newListItem);
    }
    
    document.querySelector("#input").value = '';
    
    
}

    