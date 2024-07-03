document.addEventListener('DOMContentLoaded', function() {
    const tbody = document.querySelector('#userDetails table tbody');
    const users = JSON.parse(localStorage.getItem('signupCredentials')) || [];
    
    if (users.length > 0) {
        users.forEach(user => {
            const row = tbody.insertRow();
            row.insertCell(0).textContent = user.username;
            row.insertCell(1).textContent = user.password;
            row.insertCell(2).textContent = user.email;
            row.insertCell(3).textContent = user.phone;
            row.insertCell(4).textContent = user.cnic;
            row.insertCell(5).textContent = user.dateOfBirth;
            row.insertCell(6).textContent = user.gender;
        });
    } else {
        const row = tbody.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = 'No users found.';
        cell.colSpan = 6; 
    }
});