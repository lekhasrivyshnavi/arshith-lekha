const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let currentSlide = 0;

/* SHOW SLIDE */

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

        const words = slide.querySelectorAll(".animated-text span");

        words.forEach((word)=>{
            word.style.animation = "none";
        });

    });

    if(slides[index]){

        slides[index].classList.add("active");

        const activeWords =
        slides[index].querySelectorAll(".animated-text span");

        activeWords.forEach((word)=>{

            word.offsetHeight;

            word.style.animation = null;

        });

    }

}

/* NEXT */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

/* PREVIOUS */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

/* BUTTONS */

if(next){

    next.addEventListener("click", nextSlide);

}

if(prev){

    prev.addEventListener("click", prevSlide);

}

/* AUTO SLIDE */

if(slides.length > 0){

    setInterval(() => {

        nextSlide();

    }, 4000);

    showSlide(currentSlide);

}

/* FAQ */

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", ()=>{

        const answer = question.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }

        else{

            answer.style.maxHeight =
            answer.scrollHeight + "px";

        }

    });

});

/* INTERNSHIP FORM */

const form = document.getElementById("internshipForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append(
            "fullName",
            form.querySelector('[name="fullName"]').value
        );

        formData.append(
            "email",
            form.querySelector('[name="email"]').value
        );

        formData.append(
            "phone",
            form.querySelector('[name="phone"]').value
        );

        formData.append(
            "resume",
            form.querySelector('[name="resume"]').files[0]
        );

        formData.append(
            "domain",
            form.querySelector('[name="domain"]').value
        );

        formData.append(
            "duration",
            form.querySelector('[name="duration"]').value
        );

        formData.append(
            "internshipType",
            form.querySelector('[name="internshipType"]').value
        );

        formData.append(
            "message",
            form.querySelector('[name="message"]').value
        );

        try {

            const response = await fetch(
                "http://127.0.0.1:3000/apply",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.text();

            alert(data);

            form.reset();

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        }

    });

}

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if(navMenu.classList.contains("active")){
            menuToggle.innerHTML = "&times;";
        }
        else{
            menuToggle.innerHTML = "☰";
        }

    });

}