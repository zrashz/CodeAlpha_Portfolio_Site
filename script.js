// Initialize AOS animation library only after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });
});

// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let darkmode = document.querySelector('#darkmode');
 
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
};

// Dark mode toggle functionality
darkmode.onclick = () => {
    if(darkmode.classList.contains('fa-moon')){
        darkmode.classList.replace('fa-moon','fa-sun');
        document.body.classList.add('active');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkmode.classList.replace('fa-sun','fa-moon');
        document.body.classList.remove('active');
        localStorage.setItem('darkMode', 'disabled');
    }
};

// Check if dark mode was previously enabled
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkmode.classList.replace('fa-moon','fa-sun');
        document.body.classList.add('active');
    }
    
    // Additional code to verify image loading
    console.log("DOM fully loaded");
    
    // Check if images in the images folder are loading correctly
    const imageElements = document.querySelectorAll('img');
    imageElements.forEach(img => {
        if (img.complete && img.naturalHeight !== 0) {
            console.log(`Image loaded successfully: ${img.src}`);
        } else {
            img.addEventListener('load', function() {
                console.log(`Image loaded successfully: ${img.src}`);
            });
            
            img.addEventListener('error', function() {
                console.error(`Failed to load image: ${img.src}`);
            });
        }
    });
});
