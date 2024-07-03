document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menuul = document.getElementById('ul');
    const Logo2 = document.getElementById('Logo-2');
    const links = document.querySelectorAll('#ul li a'); 

    hamburger.addEventListener('click', function() {
        menuul.style.display = menuul.style.display === 'block' ? 'none' : 'block';
        Logo2.style.display = "none";
    });

   
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

window.addEventListener('resize', function() {
    const logo = document.getElementById('Logo');
    const Logo2 = document.getElementById('Logo-2');
    const menuul = document.getElementById('ul');

    if (window.innerWidth > 768) {
        logo.style.display = 'none';
        Logo2.style.display = "block";
        menuul.style.display = 'block';
    } else {
        logo.style.display = 'block';
        Logo2.style.display = "none";
        menuul.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    displayUsers();
});

function displayUsers() {
    const usersContainer = document.getElementById('usersList');
    // Assuming users are stored as a JSON string
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.length > 0) {
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.textContent = `User: ${user.name}`; // Assuming each user object has a name property
            usersContainer.appendChild(userElement);
        });
    } else {
        usersContainer.textContent = 'No users found.';
    }
}