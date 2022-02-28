//Variables for navigation bar
const mobileNavBtn = document.querySelector('.mobile-menu-button')
const mobileNavBar = document.querySelector('.mobile-menu-bar')
const navBar = document.querySelector('.nav-bar')
const mainTag = document.getElementsByClassName('main')[0]
const footerTag = document.getElementsByTagName('footer')[0]
//Variable for contact us form
const contactUsBtn = document.querySelectorAll('.contact-us-btn')
const contactUsForm = document.querySelector('.contact-us')
const closeFormBtn = document.getElementById('form-close-btn')
const form = document.getElementsByTagName('form')[0]
const backdrop = document.querySelector('.backdrop')

//Functions
const openMobileNav = () => {
    mobileNavBar.classList.toggle('active')


    mobileNavBar.classList.contains('active') ?
        navBar.classList.add('open')
        : navBar.classList.remove('open')

    if (navBar.classList.contains('open')) {
        mainTag.style.transform = "translateY(17.4rem)"
        footerTag.style.transform = "translateY(17.4rem)"
    } else {
        mainTag.style.transform = "translateY(0)"
        footerTag.style.transform = "translateY(0)"
    }
}


const openContactUsForm = (e) => {
    e.preventDefault();
    contactUsForm.classList.add('open')
    backdrop.classList.add('open')

    if (contactUsForm.classList.contains('open')) {
        navBar.classList.remove('open')
        mainTag.style.transform = "translateY(0)"
        mobileNavBar.classList.remove('active')
    } else {
        navBar.classList.add('open')
    }
}

const closeContactUsForm = () => {
    contactUsForm.classList.remove('open')
    backdrop.classList.remove('open')
}

//Event Listeners
contactUsBtn.forEach(link => {
    link.addEventListener('click', openContactUsForm)
})
closeFormBtn.addEventListener('click', closeContactUsForm)
form.addEventListener('submit', (e) => { e.preventDefault(); })
mobileNavBtn.addEventListener('click', openMobileNav)