const toggleBTN = document.querySelector(".navbar-toggler");
const toggleBTNIcon = document.querySelector(".navbar-toggler i");
const menuBtn = document.querySelector(".navbar-nav");

toggleBTN.onclick = function(){
    menuBtn.classList.toggle("open")
    const isOpen = menuBtn.classList.contains("open")

    toggleBTNIcon.classList = isOpen
    ? 'fas fa-hamburger'
    : 'fas fa-hamburger'
}