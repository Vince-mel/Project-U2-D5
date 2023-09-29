const onScroll = function() {
    let colorbutton = document.getElementById('navbutton');
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 200) {
        navbar.style.backgroundColor = 'white';
        colorbutton.style.backgroundColor = '#198917';
    } else {
        navbar.style.backgroundColor = '#ffc017';
        colorbutton.style.backgroundColor = '#191919';
    }
};

window.onscroll = onScroll;
