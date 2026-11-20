"use strict";
console.log("JavaScript подключен");

const cookie = document.getElementById("cookieOverlay");
const accept = document.getElementById("cookieAccept");
const reject = document.getElementById("cookieReject");

function closeCookie() {
    cookie.classList.add("hidden");
}

accept.onclick = closeCookie;
reject.onclick = closeCookie;

const startButton = document.querySelector(".hero-content .btn");
const supportButton = document.querySelector(".footer-right .btn");
const modal = document.getElementById("authModal");
const closeButton = document.getElementById("closeModal");

function openModal() {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollWidth + "px";
    document.body.style.overflow = "hidden";
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
}

startButton.onclick = openModal;
supportButton.onclick = openModal;
closeButton.onclick = closeModal;

modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

const loginForm = document.getElementById("authForm");
loginForm.onsubmit = function(event) {
    event.preventDefault();
    alert("Welcome to Solus!");
    closeModal();
};

const slider = document.querySelector(".testimonial-cards");
const leftButton = document.querySelector(".arrows button:first-child");
const rightButton = document.querySelector(".arrows button:last-child");

let moving = false;

function getWidth() {
    const card = slider.querySelector(".card");
    const width = card.offsetWidth + 24;
    return width;
}

rightButton.onclick = function() {
    if (moving === true) {
        return;
    }
    moving = true;
    const width = getWidth();
    slider.style.transition = "transform 0.7s ease";
    slider.style.transform = "translateX(-" + width + "px)";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.appendChild(slider.firstElementChild);
        slider.style.transform = "translateX(0)";
        moving = false;
    }, 700);
};

leftButton.onclick = function() {
    if (moving === true) {
        return;
    }
    moving = true;
    const width = getWidth();
    slider.style.transition = "none";
    slider.insertBefore(
        slider.lastElementChild,
        slider.firstElementChild
    );
    slider.style.transform = "translateX(-" + width + "px)";
    setTimeout(function() {
        slider.style.transition = "transform 0.7s ease";
        slider.style.transform = "translateX(0)";
        setTimeout(function() {
            moving = false;
        }, 700);
    }, 30);
};

const questions = document.querySelectorAll(".accordion-item");
for (let i = 0; i < questions.length; i++) {
    questions[i].onclick = function() {
        const open = this.classList.contains("active");
        for (let j = 0; j < questions.length; j++) {
            questions[j].classList.remove("active");
        }
        if (open === false) {
            this.classList.add("active");
        }
    };
}

const contactForm = document.getElementById("contactForm");
contactForm.onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const success = document.getElementById("successMessage");
    emailError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";
    let correct = true;

    if (email === "") {
        emailError.textContent = "Email is required";
        correct = false;
    } else {
        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            emailError.textContent = "Please enter a valid email";
            correct = false;
        }
    }
    if (message === "") {
        messageError.textContent = "Message is required";
        correct = false;
    } else {
        if (message.length < 10) {
            messageError.textContent = "Message must be at least 10 characters";
            correct = false;
        }
    }

    if (correct === true) {
        success.textContent = "Thank you! Your message has been sent successfully.";
        contactForm.reset();
    }
};
