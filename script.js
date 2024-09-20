const burger = document.querySelector(`.burger`)
const menu = document.querySelector(`.menu`)

burger.onclick = () => {
    menu.classList.toggle(`open`)
}