window.addEventListener('scroll', function() {
    const header = document.querySelector('header.sticky');
    if (window.scrollY > 50) {  // Adjust this value to when the header should shrink
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});


document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});