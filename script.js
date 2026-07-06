// Butang Hubungi Saya
const contactBtn = document.querySelector(".card button");

contactBtn.addEventListener("click", function () {
    window.open("https://wa.me/60148495642");
});

// Butang Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
const words = [
    "Multimedia Designer",
    "Web Developer",
    "Video Editor"
];

let wordIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    }
}

type();