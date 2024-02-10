const logo = document.querySelectorAll('.logo div');
const price = document.querySelectorAll('.price');
const number = document.querySelectorAll('.no');

number.forEach((el, key) => {
    el.addEventListener('click', () => {
        if (!el.classList.contains('active')) {
            // Remove 'active' class from all numbers
            number.forEach(value => {
                value.classList.remove('active');
            });
            // Remove 'active' class from all logos
            logo.forEach(value => {
                value.classList.remove('active');
            });
            // Remove 'active' class from all prices
            price.forEach(value => {
                value.classList.remove('active');
            });
            // Add 'active' class to clicked number
            el.classList.add('active');
            // Add 'active' class to corresponding logo
            logo[key].classList.add('active');
            // Add 'active' class to corresponding price
            price[key].classList.add('active');
        }
    });
});
