import throttle from 'lodash.throttle';
// console.log(localStorage.getItem("feedback-form-state"));

const form = document.querySelector(".feedback-form");
const FORM_LOCAL = "feedback-form-state";
let formObj = {}
start();
console.log(form);


form.addEventListener("submit", formSubmit);

function formSubmit(event) {
   event.preventDefault();
    if (form.elements.email.value=== ''|| form.elements.message.value ==='') {
      alert("Заполните все поля!!");
      
      return;
   }
   formObj.email = form.elements.email.value;
   formObj.message = form.elements.message.value;
   console.log(`Вот форма =>`);
   console.log(formObj);
   localStorage.removeItem(FORM_LOCAL);
   event.target.reset();
}




form.addEventListener("input",throttle( formInput, 500));
// form.addEventListener("submit", formInput);

function formInput(event) {    
   
      formObj[event.target.name] = event.target.value;  
 
   // console.log(event.target.name);
   // console.log(event.target.value);
   // console.log(formObj);
   localStorage.setItem(FORM_LOCAL, JSON.stringify(formObj));
   console.log(localStorage.getItem(FORM_LOCAL));
}

function start(){
   if (!localStorage.getItem(FORM_LOCAL)) {
      return;
   }   
   formObj = JSON.parse(localStorage.getItem(FORM_LOCAL));
   form.elements.email.value = formObj.email;
   form.elements.message.value = formObj.message;
  
}