new WOW().init();

const footerLinks = document.querySelectorAll(".footer-links a");

   footerLinks.forEach(link => {
     link.addEventListener("mouseover", () => {
       link.classList.add("animate__animated", "animate__headShake");
     });
     link.addEventListener("animationend", () => {
       link.classList.remove("animate__animated", "animate__headShake");
     });
   });





 