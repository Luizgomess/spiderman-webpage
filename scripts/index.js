
let toggle = document.querySelector('.header__menu-mobile');
let sidebar = document.querySelector('.header__sidebar');
let toggleLine = document.querySelector('.line');

toggle.addEventListener("click", () => {
    handleOpenSidebar()
})

function handleOpenSidebar() {
    sidebar.classList.toggle("show-sidebar")
    toggleLine.classList.toggle("active-menu-mobile")
    bodyOverlay()
}

function bodyOverlay() {
    document.body.classList.toggle("overlay")
}