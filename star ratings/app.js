const stars = document.querySelectorAll(".starss")
const info = document.querySelector(".info")


console.log(stars)
stars.forEach((star, clickedIndex) => {
    star.addEventListener('click', (e) => {
        stars.forEach((star1, index) => {
            if (index <= clickedIndex) {
                // console.log(1)
                star1.className = 'starss yellowgreen';
            } else {
                star1.className = 'starss gray';
            }
        })
        e.preventDefault();
        info.innerHTML = `you have given ${clickedIndex+1} ratings`
        console.log(clickedIndex+1)
    })
})