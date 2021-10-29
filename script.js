const addEL = document.getElementById("add");
const formEl = document.querySelector('form')
const newtodosDel = document.querySelector('.to-do-list_todos')



addEL.addEventListener("click", ()=>{
           loader(); 
        
        
         
}); 

function loader() {
    let inputText = document.getElementById("inputText").value;
    let sontext = inputText.toUpperCase();
    newtodosDel.innerHTML += 
    `<div  class="checkboxer"> 
    
    <i class="far fa-thumbs-up"></i>
    <label class="okey" >${sontext}</label> 
    <img class="delete" src="delete.svg" alt="">
</div>`
formEl.reset();
}





newtodosDel.addEventListener('click', (a) => {
    if (a.target.classList.contains('delete')) {
     a.target.parentElement.classList.toggle("changed2");
   
       }

});
newtodosDel.addEventListener('click', (a) => {
    if (a.target.classList.contains('fa-thumbs-up')) {
        a.target.nextElementSibling.classList.toggle("complated")
        a.target.classList.toggle("changed1")
     
       }

});
newtodosDel.addEventListener('click', (a) => {
    if (a.target.classList.contains('okey')) {
        a.target.classList.toggle("complated")
     
       }

});



