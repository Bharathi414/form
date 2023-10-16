const form = document.querySelector('#form')
const username = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

let success = true;

form.addEventListener('submit', (e)=>
{

    if (!validateinputs())
    {
        e.preventDefault();
    }
})

function validateinputs()
{
    const namevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const cpasswordvalue = cpassword.value.trim();

    if( namevalue === '')
    {
        success = false;
        seterror(username, "Name cannot be blank");
    }
    else
    {
        setsuccess(username)
    }

    if(emailvalue === '')
    {
        success = false;
        seterror(email, "Email cannot be blank")
    }
    else if(!isEmail(emailvalue))
    {
        success = false;
        seterror(email, "Invalid email")
    }
    else
    {
        setsuccess(email)
    }

    if(passwordvalue === '')
    {
        success = false;
        seterror(password, "password cannot be blank")
    }
    else if(passwordvalue.length<6)
    {
        success = false;
        seterror(password, "Password must be more than 6 letters")
    }
    else
    {
        setsuccess(password)
    }

    if(cpasswordvalue === '')
    {
        success = false;
        seterror(cpassword, "Confirm password cannot be blank")
    }
    else if(cpasswordvalue !== passwordvalue){
        success = false;
        seterror(cpassword, "Password and confirm must be same")
    }
    else
    {
        setsuccess(cpassword);
    }

    return success;
}

function seterror(element,message)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success')
}

function setsuccess(element)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error')
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}