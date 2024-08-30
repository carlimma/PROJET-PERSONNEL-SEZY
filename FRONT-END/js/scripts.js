const socket = io.connect('https://sezy.onrender.com');

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Gather form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Send form data to server via socket
        console.log("Envoi du message :"+formData)
        socket.emit('nouveauMessage', formData);

        // Handle form submission response
        socket.on('nouveauMessage', function (response) {
            if (response["success"]) {
                alert('Message envoyé!');
                form.reset();
            } else {
                alert('Erreur lors de l\'envoi du message!');
            }
        });
    });
});
