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
   event.target.reset();
   clearForm();
   
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

function start() {
   console.log(`Вот форма =>`);
   console.log(formObj);
   if (!localStorage.getItem(FORM_LOCAL)) {
      return;
   }   
   formObj = JSON.parse(localStorage.getItem(FORM_LOCAL));
   form.elements.email.value = jsonTest(formObj.email);
   form.elements.message.value = jsonTest(formObj.message);
  
}

function jsonTest(obj) {
   if (obj === undefined) {
      return '';
   }
   return obj;
}

function clearForm() {
   console.log("Local Storage ====>");
   console.log(localStorage.setItem(FORM_LOCAL, JSON.stringify(formObj)));
   try {
      console.log("Выполняю!!!!!")
       localStorage.clear();
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
   }
   console.log("Delited Local Storage ====>");
   console.log(localStorage.setItem(FORM_LOCAL, JSON.stringify(formObj)));
}