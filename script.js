document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('open');
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-button');
    const menuItems = document.querySelectorAll('.menu-item');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            // Desactivar el botón activo previamente
            document.querySelector('.category-button.active').classList.remove('active');
            // Activar el botón actual
            this.classList.add('active');

            menuItems.forEach(item => {
                if (category === 'todos' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});