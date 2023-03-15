let form = document.getElementById("addForm")
let itemList = document.getElementById("items")
let filter = document.getElementById("filter")


// submit event on form
form.addEventListener('submit',addItem)

// Delete event
itemList.addEventListener('click', removeItem)

// filter event
filter.addEventListener("keyup", filterItems)

//Add item callback aka function
function addItem(e){
    e.preventDefault();
    
    // Get input Value
    let newItem =document.getElementById('item').value

    //create new li element 
    let li = document.createElement("li")
    //add class
    li.className = 'list-group-item'
    // add text node with input
    li.appendChild(document.createTextNode(newItem))
    
    // create del button
    let deleteBtn = document.createElement("button")
    // add classes
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append X text node to button
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn)
    
    // append Li to list
    itemList.appendChild(li)

}


// remove item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are your Sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


// filter items
function filterItems(e){
    //convert to lower case
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li')
    // convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display="block"
        }
        else{
            item.style.display= 'none' 
        }
    })
}