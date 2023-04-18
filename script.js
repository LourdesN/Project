function validateName() {

    var name = document.getElementById('fname').value;

    if(name.length == 0) {

      producePrompt('Name is required', 'name-error' , 'red')
      return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

      producePrompt('First and last name, please.','name-error', 'red');
      return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}

function validatePhone() {

var phone = document.getElementById('phone').value;

if(phone.length == 0) {
    producePrompt('Phone number is required.', 'phone-error', 'red');
    return false;
}

if(phone.length != 10) {
    producePrompt('Include area code.', 'phone-error', 'red');
    return false;
}

if(!phone.match(/^[0-9]{10}$/)) {
    producePrompt('Only digits, please.' ,'phone-error', 'red');
    return false;
}

producePrompt('Valid', 'phone-error', 'green');
return true;

}

function validateEmail () {

var email = document.getElementById('email').value;

if(email.length == 0) {

  producePrompt('Email Invalid','email-error', 'red');
  return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

  producePrompt('Email Invalid', 'email-error', 'red');
  return false;
}

producePrompt('Valid', 'email-error', 'green');
return true;

}

function validateMessage() {
var message = document.getElementById('enquires').value;
var required = 30;
var left = required - message.length;

if (left > 0) {
  producePrompt(left + ' more characters required','message-error','red');
  return false;
}

producePrompt('Valid', 'message-error', 'green');
return true;

}

function validateForm() {
if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
  jsShow('submit-error');
  producePrompt('Please fix errors to submit.', 'submit-error', 'red');
  setTimeout(function(){jsHide('submit-error');}, 2000);
  return false;
}
else {

}
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;

}

//Smooth scrolling
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) 
{ // relitere 
    item.addEventListener('click', (e)=> 
    {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView(
    {
      behavior: 'smooth'
    })
    history.pushState(null, null, hashval)
    e.preventDefault()
  })
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
