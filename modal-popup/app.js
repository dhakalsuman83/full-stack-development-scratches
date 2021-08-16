const modal = document.querySelector(".modal-container")
const btn = document.querySelector(".btn")
const closeBtn = document.querySelector(".modal-btn")


btn.addEventListener('click', () => {
    modal.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    modal.style.display="none"
})

window.addEventListener('click', (e) => {
    if(e.target == modal){
    modal.style.display = "none"
    }
})