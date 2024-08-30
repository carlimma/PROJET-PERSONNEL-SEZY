const socket = io.connect('https://sezy.onrender.com');
  
window.addEventListener('load', event => {
    socket.emit('obtenirDates');
    socket.on("toutesDates", data => {
        console.log(data)
        let CreerBtn=document.querySelector('.Btn');
        for (let i in data) {
            CreerBtn.innerText+="Date : "+data[i]["date"].substring(8, 10)+"/"+data[i]["date"].substring(5, 7)+"/"+data[i]["date"].substring(0, 4) +"-- Destination : "+data[i]["destination"]+"-- Prix : "+data[i]["prix"]+" FCFA/KG"
            CreerBtn.innerHTML+="</br></br>";

        }
    });
    

});

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

