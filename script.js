// =========================menu-iconn=================================================

// Select elements
const menuIconn = document.querySelector('.menu-iconn');
const navMenu = document.querySelector('.navv');

// Toggle functionality
menuIconn.addEventListener('click', () => {
    menuIconn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ============================About-section==============================================

function toggleSection(section) {
    const allSections = document.querySelectorAll('.skills-awards ul');
    const sectionToToggle = document.getElementById(section);

    // Hide all sections
    allSections.forEach((sec) => {
        sec.classList.remove('show');
    });

    // Toggle the clicked section
    sectionToToggle.classList.toggle('show');
}


// =============================Contact Form============================================

const scriptURL = 'https://script.google.com/macros/s/AKfycbxawhraQhWbfHvKIk6LYdrAFzBOxviMej-oJ3WUTOGYbZhPvUl5LZwQQpmWo0R58U10KA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset() // Reset the form immediately
            msg.innerHTML = "Thank you! Your message has been sent successfully."
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
        })
        .catch(error => console.error('Error!', error.message))
})

// =============================nav bar============================================
window.onscroll = function () {
    var navbar = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('active');
});
