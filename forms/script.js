const form = document.getElementById("form"); 
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", function (e) { 
    e.preventDefault(); 
    checkinputs();
});

function checkinputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;    
    const passwordConfirmationValue = passwordConfirmation.value;
    
    if (usernameValue === '') {
        setErrorFor(username, "O nome de usuario é obrigatório.");
    } else {
        setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, "O email é obrigatorio");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Porfavo, insira um email valido");
    } else {
        setSuccessFor(email);
    }
    if (passwordValue === '') {
        setErrorFor(password, "Senha é obrigatoria");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no minimo 7 caracteres")
    } else {
        setSuccessFor(password);
    }
    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, "Confirmação de Senha é obrigatoria");
    } else if (passwordConfirmationValue !== passwordValue){
        setErrorFor(passwordConfirmation, "A senha não confere");
    } else {
        setSuccessFor(passwordConfirmation);
    } 

    const formControls = form.querySelectorAll('.form-control');

    const formIsValid = [... formControls].every((formControl) => {
        return (formControl.className === "form-control success");
    })
     if (formIsValid) {
        console.log("O formulario esta 100% Valido")
     }
}

//msg de sucesso
function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    
    //adc classe de sucesso
    formControl.className = "form-control success"
}

//msg de error
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adc mensagem de erro
    small.innerText = message;

    //adc classe de erro
    formControl.className = "form-control error";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
