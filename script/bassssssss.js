const a = new Audio('medias/audio/AHRDAA.mp3')
const b = new Audio('medias/audio/pet2.mp3')
const pet = new Audio('medias/audio/pet1.mp3')
const body = document.querySelector("body")
const jojoimg = document.querySelector("#jojoimg")
const shrek = document.querySelector(".ishrek")
const text = document.querySelector("span")
const song = [
    a,
    b,
    pet
]

body.addEventListener('click', () => {
    text.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    text.classList.add("Aspan")
    jojoimg.classList.add("imgrotate")
    body.classList.add("bodyanimation")
    shrek.classList.add("shrek")
    for (audio of song) {
        audio.play();
    }
})
body.addEventListener('click', () => {
    b.volume = 1;
    pet.volume = 1;
    b.play();
    pet.play();
})