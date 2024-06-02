const text = "With the world's largest web developer site..";
const typingTextElement = document.getElementById("typing-text");
const typingSpeed = 100;
const waitingTime = 2000;

let index = 0;
let isDeleting = false;

function typeText() {
    if (!isDeleting) {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(typeText, waitingTime);
        }
    } else {
        if (index > 1) {
            typingTextElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeText, typingSpeed);
        } else {
            isDeleting = false;
            setTimeout(typeText, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});