const nav =
document.getElementById("nav");

const navinner =
document.getElementById("nav-inner");

const links =
document.querySelectorAll(".nav-link");
nav.addEventListener("click", function(){
    navinner.classList.toggle("active");
    if(navinner.classList.contains("active")){
        nav.textContent = "×";
    }else{
        nav.textContent = "☰";
    }
});

links.forEach(function(link){
    link.addEventListener("click", function(){
        navinner.classList.remove("active");
        nav.textContent = "☰";
    });
});

const message =
document.getElementById("top-btn");

window.addEventListener("scroll", function () {
 if(window.scrollY > 0){
        message.style.opacity = "1";
    }else{
        message.style.opacity = "0";
    }
   

});


const careers =
document.querySelectorAll(".career");

careers.forEach(function(item){

    const startYear =
    Number(item.dataset.start);

    const currentYear =
    new Date().getFullYear();

    const career =
    currentYear - startYear;

    const name =
    item.textContent;

    item.textContent =
    `${name}（歴${career}年）`;

});

document
.getElementById("send-btn")
.addEventListener("click", function(){
    alert("送信ありがとうございました");
    document.querySelector(".form").reset();
    
    this.disabled = true;
});


/* SP */
const swiper = new Swiper(".styleSwiper", {

    slidesPerView: 1,

    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }

});

/* PC */
const pcCards =
document.querySelectorAll(".style-pc .style-card");

let current = 0;

function updateCarousel(){

    pcCards.forEach(card => {

        card.classList.remove(
            "left",
            "active",
            "right"
        );

    });

    const left =
    (current - 1 + pcCards.length)
    % pcCards.length;

    const right =
    (current + 1)
    % pcCards.length;

    pcCards[left].classList.add("left");
    pcCards[current].classList.add("active");
    pcCards[right].classList.add("right");

}

updateCarousel();

document
.getElementById("next")
.addEventListener("click", function(){

    current++;

    if(current >= pcCards.length){

        current = 0;
    }

    updateCarousel();

});

document
.getElementById("prev")
.addEventListener("click", function(){

    current--;

    if(current < 0){

        current = pcCards.length - 1;
    }

    updateCarousel();

});