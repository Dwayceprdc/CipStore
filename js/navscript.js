const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuspace = document.getElementsByClassName('menuspace')[0]

toggleButton.addEventListener('click', () => {
    menuspace.classList.toggle('active')
})