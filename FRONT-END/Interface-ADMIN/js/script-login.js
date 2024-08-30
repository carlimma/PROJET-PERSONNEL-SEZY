const socket = io.connect('https://sezy.onrender.com');
  
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();  // Empêche la soumission par défaut du formulaire et le rechargement de la page
        
        const username = document.getElementById('exampleInputEmail').value;
        const password = document.getElementById('exampleInputPassword').value;

        // Émettre les informations de connexion au serveur
        socket.emit('connexionAdmin', { username, password });
    });

    // Écouter la réponse du serveur
    socket.on('connexionReussie', () => {
        window.location.href = './index.html';  // Rediriger vers la page d'accueil ou tableau de bord
    });

    socket.on('erreurConnexion', () => {
        alert('Erreur de connexion. Veuillez vérifier vos identifiants.');
    });
});
