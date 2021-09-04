const myform = document.querySelector('.form');
const inputs = document.querySelectorAll('.input');
myform.addEventListener('submit', (e) => {
  e.preventDefault();
  inputs.forEach((input)=> {
    if(!input.value){
      swal("Somthing went wrong!", "Fill all the blanks!");
      input.parentElement.classList.add('error');
    }
    else {
      input.parentElement.classList.remove('error');
      if(input.type=='emil'){
        if(validateEmail(input.value)){
          input.parentElement.classList.remove('error');
        }
      }
    }
  });
});
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function clicking (){
  swal("Good job!", "Thank you for submitting!", "success");
}