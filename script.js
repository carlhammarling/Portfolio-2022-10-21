const form = document.querySelector('#contact');




class Message {
    constructor(message, name, email) {
        this.message = message.value
        this.name = name.value
        this.email = email.value
    }
}

const messages = [];

form.addEventListener('submit', e => {
    e.preventDefault();

    const message = document.querySelector('#msg');
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');

    const request = new Message(message, name, email);
    
    messages.push(request);

    console.log(messages);
})