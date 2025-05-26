document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const categoryButtons = document.querySelectorAll('.category-button');
    const menuItems = document.querySelectorAll('.menu-item');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('open');
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            document.querySelector('.category-button.active').classList.remove('active');
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