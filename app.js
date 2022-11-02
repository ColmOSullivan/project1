
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
var modalBtns = document.querySelectorAll(".modalOpen");

modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});

var closeBtns = document.querySelectorAll('.modalClose');

closeBtns.forEach(function(btn) {
  btn.onclick = function(){
    var modal = (btn.closest(".modal").style.display="none");
  };
});

window.onclick = function(event){
    if(event.target.className === 'modal'){
        event.target.style.display = "none";
    }
}