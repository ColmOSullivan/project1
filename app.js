
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

const openModal = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-modal-closer]");
console.log()


openModal.forEach(function (cButton){
    cButton.addEventListener("click", function (){
        const modal = document.querySelector(cButton.CDATA_SECTION_NODE.modalTarget);
        myModal(modal);
    });
});

function myModal(modal){
    if (modal == null){
        return;
    }
    modal.classList.add("show");
    document.querySelector("body").classList.add("overlay");
}

closeModalButton.forEach(function (closeModalButton){
    closeModalButton.addEventListener("click", function(){
        const currentModal = closeModalButton.closest(".modal");
        closeModalButton(currentModal);
    });
});

function closeModal(currentModal){
    if (currentModal == null){
        return;
    }
    currentModal.classList.remove("show");
    document.querySelector("body").classList.remove("overlay")
}
