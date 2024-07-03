document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menuul = document.getElementById('ul');
    const Logo2 = document.getElementById('Logo-2');
    const links = document.querySelectorAll('#ul li a'); 

    hamburger.addEventListener('click', function() {
        menuul.style.display = menuul.style.display === 'block' ? 'none' : 'block';
        Logo2.style.display = "none";
    });

    setActiveLink();
   
});

function setActiveLink() {
    const currentPage = window.location.href.split('/').pop();

    const links = document.querySelectorAll('#ul li a');

    links.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        link.classList.remove('active');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

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
