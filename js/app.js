const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    var scroll_position = window.scrollY;
    if(scroll_position > 200){
        header.style.backgroundColor = "#29323c";
        header.style.transition = "1s ease all";
    }else{
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});



const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");


form.addEventListener("click", (e) => {
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    if(usernameValue == ''){
        setError(username, 'user name be empty');
    }
    else if(usernameValue.length <= '6'){
        setError(username, 'user name be large 6');
    }
    else{
        setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, 'email not empty');
    }else if(!validateEmail(emailValue)){
        setError(email, 'the email is not correct');
    }else{
        setSuccess(email);
    }
    if(messageValue === ''){
        setError(message, 'Message not empty');
    }else if(messageValue.length <= '200'){
        setError(message, 'the Message = 200 char');
    }else{
        setSuccess(message);
    }
}



function setError(input, mess){
    const formControl = input.parentElement;
    const p = formControl.querySelector("p");

    p.innerText = mess;

    formControl.className = "form-control error";
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const themeButtom = document.getElementById("theme-button");
const darkTheme = 'dark';
const iconTheme = 'bx-toggle-right';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButtom.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

themeButtom.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButtom.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButtom.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'


// var about = document.getElementById("hover");
//     const img = about.parentElement;
//     img.className = "about-img img";

