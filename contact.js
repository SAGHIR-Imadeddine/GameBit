const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const number = document.getElementById('number');
const email = document.getElementById('email');






function validateInput(){
    //check username
    if(fullName.value.trim()===""){
       onError(fullName,"Name cannot be empty");
    }else{
        if(!isValidName(fullName.value.trim())){
            onError(fullName,"Invalid Name");
        }else{
        onSuccess(fullName);
        }
    }

    //check phone number
    if(number.value.trim()===""){
        onError(number,"Phone Number cannot be empty");
     }else{
        if(!isValidNumber(number.value.trim())){
            onError(number,"Invalid Number");
        }else{
            onSuccess(number);
        }
       
     }

    //check email
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Invalid Email");
        }else{
            onSuccess(email);
        }
    }
    
    return isValidName(fullName.value.trim()) && isValidNumber(number.value.trim()) && isValidEmail(email.value.trim());
}

form.addEventListener('submit', function (e){
    if (!validateInput()){
    e.preventDefault();
    }
});

function onSuccess(input){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden"; 
    
    parent.classList.remove("nonValid");
    parent.classList.add("valid");
}
function onError(input,message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;  
    
    parent.classList.remove("valid");
    parent.classList.add("nonValid");
}



function isValidName(fullName){
        let nameRegex = /^[\w]{3,} [\w]{3,}( [\w]{3,})?$/;  
        return nameRegex.test(fullName);
}
    
function isValidNumber(number){
        let phoneRegex = /^\+212[657]\d{8}$/;  
        return phoneRegex.test(number);
}

function isValidEmail(email){
        let emailRegex = /^[\w\d._-]+@[\w]+\.[\w]{2,5}$/i;  
        return emailRegex.test(email);
}




const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{
    faq.addEventListener("click",() =>{
        faq.classList.toggle("active");
    } )
})


