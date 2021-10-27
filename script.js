const addEL = document.getElementById("add");
const formEl = document.querySelector('form')
const todos = document.querySelector('.todos')
const newtodosDel = document.querySelector('.to-do-list_todos')

// let x = 0;
// let y = 0;
// let a = 0;
//  let b = 0;
//  let c = 0;
//   let d = 0;
//  let e = 0;
// let f = 0;
// let g=0;


addEL.addEventListener("click", ()=>{
           loader(); 
         
}); 

function loader() {
    let inputText = document.getElementById("inputText").value;
    let sontext = inputText.toUpperCase();
    todos.innerHTML += 
    `<div class="check">
    <div  class="checkboxer" id="checkboxid">                   
    <input class="inputcheck" type="checkbox" id="first" >
    <label class="label" for="first">${sontext}</label>
    <img class="delete" src="delete.svg" alt="">

</div></div>`
formEl.reset();
}


let x =0;
newtodosDel.addEventListener('click', (a) => {
    if (a.target.classList.contains('delete')) {
      a.target.parentElement.remove();
       }

});
// newtodosDel.addEventListener('click', (a) => {
//     if(a.target.classList.contains("label")){
//         a.target.style.textDecoration = "line-through"
//     }

// });
    












    



// let firstEl0 = document.getElementById(`first0`);
// let checkel0 = document.getElementById(`check0`);
// let delButEl0 = document.getElementById(`delBut0`);
// let labelEl0 = document.getElementById(`label0`);
// firstEl0.addEventListener("click" , ()=> {
//     if(x == 0){
//    labelEl0.style.textDecoration = "line-through";x++;}
//    else{labelEl0.style.textDecoration = "none"; x =0}


// });
// delButEl0.addEventListener("click" , ()=> {

//     checkel0.innerHTML = "";
  
// });


// let firstEl1 = document.getElementById(`first1`);
// let checkel1 = document.getElementById(`check1`);
// let delButEl1 = document.getElementById(`delBut1`);
// let labelEl1 = document.getElementById(`label1`);
// firstEl1.addEventListener("click" , ()=> {
    
//     if(a == 0){
//    labelEl1.style.textDecoration = "line-through";a=1;}
//    else{labelEl1.style.textDecoration = "none"; a =0}


// });
// delButEl1.addEventListener("click" , ()=> {

//     checkel1.innerHTML = "";
//     y -=2;
  
// });
// let firstEl2 = document.getElementById(`first2`);
// let checkel2 = document.getElementById(`check2`);
// let delButEl2 = document.getElementById(`delBut2`);
// let labelEl2 = document.getElementById(`label2`);
// firstEl2.addEventListener("click" , ()=> {
   
//     if(b == 0){
//    labelEl2.style.textDecoration = "line-through";b =1;}
//    else{labelEl2.style.textDecoration = "none"; b =0}


// });
// delButEl2.addEventListener("click" , ()=> {

//     checkel2.innerHTML = "";
  
// });
// let firstEl3 = document.getElementById(`first3`);
// let checkel3 = document.getElementById(`check3`);
// let delButEl3 = document.getElementById(`delBut3`);
// let labelEl3 = document.getElementById(`label3`);
// firstEl3.addEventListener("click" , ()=> {
   
//     if(c == 0){
//    labelEl3.style.textDecoration = "line-through";c=1;}
//    else{labelEl3.style.textDecoration = "none"; c =0}


// });
// delButEl3.addEventListener("click" , ()=> {

//     checkel3.innerHTML = "";
  
// });
// let firstEl4 = document.getElementById(`first4`);
// let checkel4 = document.getElementById(`check4`);
// let delButEl4 = document.getElementById(`delBut4`);
// let labelEl4 = document.getElementById(`label4`);
// firstEl4.addEventListener("click" , ()=> {
  
//     if(d == 0){
//    labelEl4.style.textDecoration = "line-through";d = 1;}
//    else{labelEl4.style.textDecoration = "none"; d =0}


// });
// delButEl4.addEventListener("click" , ()=> {

//     checkel4.innerHTML = "";
 
// });
// let firstEl5 = document.getElementById(`first5`);
// let checkel5 = document.getElementById(`check5`);
// let delButEl5 = document.getElementById(`delBut5`);
// let labelEl5 = document.getElementById(`label5`);
// firstEl5.addEventListener("click" , ()=> {
   
//     if(e == 0){
//    labelEl5.style.textDecoration = "line-through";e =1;}
//    else{labelEl5.style.textDecoration = "none"; e =0}


// });
// delButEl5.addEventListener("click" , ()=> {

//     checkel5.innerHTML = "";
 
// });
// let firstEl6 = document.getElementById(`first6`);
// let checkel6 = document.getElementById(`check6`);
// let delButEl6 = document.getElementById(`delBut6`);
// let labelEl6 = document.getElementById(`label6`);
// firstEl6.addEventListener("click" , ()=> {
    
//     if(f == 0){
//    labelEl6.style.textDecoration = "line-through";f =1;}
//    else{labelEl6.style.textDecoration = "none"; f =0}


// });
// delButEl6.addEventListener("click" , ()=> {

//     checkel6.innerHTML = "";
 
// });
// let firstEl7 = document.getElementById(`first7`);
// let checkel7 = document.getElementById(`check7`);
// let delButEl7 = document.getElementById(`delBut7`);
// let labelEl7 = document.getElementById(`label7`);
// firstEl7.addEventListener("click" , ()=> {
    
//     if(g == 0){
//    labelEl7.style.textDecoration = "line-through";g =1;}
//    else{labelEl7.style.textDecoration = "none"; g =0}


// });
// delButEl7.addEventListener("click" , ()=> {

//     checkel7.innerHTML = "";
  
// });


