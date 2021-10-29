const addEL = document.getElementById("add");
const formEl = document.querySelector('form')
const todos = document.querySelector('.todos')
const newtodosDel = document.querySelector('.to-do-list_todos')



addEL.addEventListener("click", ()=>{
           loader(); 
               
}); 

function loader() {
    let inputText = document.getElementById("inputText").value;
    let sontext = inputText.toUpperCase();
    todos.innerHTML += 
    `<div class="check">
    
    <div  class="checkboxer"> 
    
    <input type="checkbox" class="fa-thumbs-up">
    <label class="okey" >${sontext}</label> 
    <img class="delete" src="delete.svg" alt="">
    </div>
    
    

</div>`
formEl.reset();
}

newtodosDel.addEventListener('click', (a) => {
    if (a.target.classList.contains('delete')) {
      a.target.parentElement.remove();
       }

});
newtodosDel.addEventListener('click', (a) => {
    if (a.target.classList.contains('fa-thumbs-up')) {
        a.target.nextElementSibling.classList.toggle("complated")     
       }
});




