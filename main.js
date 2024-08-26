window.addEventListener("DOMContentLoaded", setupForm);


//setupForm

function setupForm(){
  const form = document.getElementById("login-form");
  form.addEventListener("submit", handleSubmit);
}


//handleSubmit


function handleSubmit(event){
  event.preventDefault();

  const {
      username,
      eMail,
      password,
      login_type,
      result
  } = event.target;

  const processUser = login_type.value == "register" ? registerUser : loginUser;
  const response    = processUser(username.value, eMail.value, password.value);
  result.innerHTML  = response;
}


//registerUser

function registerUser(username, eMail, password){
  window.localStorage.setItem("exampleLogin__username", username);
  window.localStorage.setItem("exampleLogin__eMail", eMail);
  window.localStorage.setItem("exampleLogin__password", password);
  console.log(username);
  console.log(eMail);
  console.log(password);

alert("New User Successfully Registered")
  return `New user ${username} now registered!`;
}


//loginUser

function loginUser(username, eMail, password){
  const registeredUser     = window.localStorage.getItem("exampleLogin__username");
  const registeredeMail    = window.localStorage.getItem("exampleLogin__eMail");
  const registeredPassword = window.localStorage.getItem("exampleLogin__password");

  const validUser     = username == registeredUser;
  const valideMail    = eMail == registeredeMail;
  const validPassword = password == registeredPassword;

  if(validUser && valideMail && validPassword){
    window.location.href="http://127.0.0.1:5500/todo.html";
      return `User ${username} successfully logged-in!`;
  }
    
      else if(!validUser)     return `Username ${username} has not been registered. `;
    else if(!valideMail)  return `${username}'s eMail is incorrect`;
  else if(!validPassword) return `Incorrect password for username ${username}`;
}




