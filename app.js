
// Hamburger menu, hold the pickle.
const hamburgerMenu = document.querySelector(".hamburgerMenu")
const navList = document.querySelector(".navList")

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    navList.classList.remove("active")
}))

// Shark facts buttons
function sharkFact1(){
    alert("Scientists can tell the age of a shark by checking the rings on it's vertebrae, just like trees!")
}

function sharkFact2(){
    alert("It's thought that sharks first appeared 455 million years ago, making them older than trees!")
}

// modal button
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}