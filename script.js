const form = document.querySelector('#contact');

const resetMsg = document.querySelector('#resetMsg')

const valMsg = (id) => {
    if (id.value.length < 4) {
        console.log('Message too short.');
        return false;
    }
    else {
        return true;
    }
};

const valName = (id) => {
    if (id.value.length < 2) {
        console.log('Name has to be at least 2 characters');
        return false;
    }
    else {
        return true;
    }
};

const valEmail = (id) => {
    if (id.value.length < 2) {
        console.log('Email to short');
        return false;
    }
    else {
        return true;
    }
};

//skapar ett meddelande
class Message {
    constructor(message, name, email) {
        this.message = message.value
        this.name = name.value
        this.email = email.value
    }
}

//errors
const errors = [];
//sparar meddelanden
const messages = [];

form.addEventListener('submit', e => {
    e.preventDefault();

    const message = document.querySelector('#msg');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');

    errors[0] = valMsg(message);
    errors[1] = valName(name);
    errors[2] = valEmail(email);

    if (errors.includes(false)) {
        console.log('Please fill in all the forms.')
    }

    else {
    //skapar meddelande    
    const request = new Message(message, name, email);
    //pushar in meddelande i array
    messages.push(request);

    //töm inputs
    message.value = '';
    name.value = '';
    email.value = '';


    //Gömmer formuläret o skickar ett meddelande att allt gick bra
    form.classList.add('hide');
    success.classList.remove('hide');


    //loggar meddelandena    
    console.log(messages);
    }
})


//
resetMsg.addEventListener('submit', e => {
    e.preventDefault();

    form.classList.remove('hide');
    success.classList.add('hide');
})