const a = new Audio('medias/audio/aaa.mp3')
const b = new Audio('medias/audio/pet2.mp3')
const aa = new Audio('medias/audio/AHRDAA.mp3')
const pet = new Audio('medias/audio/pet1.mp3')
const mir = new Audio('medias/audio/mir.mp3')
const body = document.querySelector("body")
const jojoimg = document.querySelector("#jojoimg")
const shrek = document.querySelector(".ishrek")
const text = document.querySelector("span")
let bubble = document.querySelector("bubble")
const song = [
    a,
    b,
    pet,
    mir,
    aa
]

body.addEventListener('click', () => {
    text.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    text.classList.add("Aspan");
    jojoimg.classList.add("imgrotate");
    body.classList.add("bodyanimation");
    shrek.classList.add("shrek");
    setInterval(bubbleMaker, 1);

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

window.addEventListener('mousemove', (e) => {
    jojoimg.style.left = e.pageX + "px";
    jojoimg.style.top = e.pageY + "px";

})

const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 100 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    setTimeout(() => {
        bubble.remove();
    }, 8000)
}

setInterval(bubbleMaker, 2000);