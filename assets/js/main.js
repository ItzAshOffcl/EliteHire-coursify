const navMenu = document.getElementById("nav-menu");
const menuBtn = document.querySelector(".nav__menu-icon");
const menuIcon = document.getElementById("menu-icon");
var isLarge = false;

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
    console.log("clicked");
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
    

/*=============== NUMBER INCREASING ANIMATION ===============*/
function animateCounter(element, startValue, endValue, duration) {
      let startTime = null;
      function animationStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentNumber = Math.round(startValue + progress * (endValue - startValue));
        element.textContent = currentNumber.toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(animationStep);
        }
      }
      requestAnimationFrame(animationStep);
    }

    // Function to initialize the counters
    function initializeCounters() {
      const companiesCounter = document.getElementById('companies-counter');
      const hiresCounter = document.getElementById('hires-counter');
      const techJobsCounter = document.getElementById('tech-jobs-counter');

      // Set the initial values for the counters
      companiesCounter.textContent = "0";
      hiresCounter.textContent = "0";
      techJobsCounter.textContent = "0";

      // Set the target values for the counters
      const targetCompanies = 100;
      const targetHires = 50000;
      const targetTechJobs = 550;

      // Animate the counters
      animateCounter(companiesCounter, 0, targetCompanies, 3000); // 3000 ms (3 seconds) animation duration
      animateCounter(hiresCounter, 0, targetHires, 3000);
      animateCounter(techJobsCounter, 0, targetTechJobs, 3000);
    }

    // Initialize the counters when the page loads
    document.addEventListener('DOMContentLoaded', initializeCounters);



    // client partners
    const slidesContainer = document.querySelector('.slider');

    function startCarousel() {
        setInterval(() => {
            slidesContainer.style.animation = 'slideAnimation 1s ease-out forwards';
        }, 3000); // Change slide every 3 seconds (adjust as needed)
    }


    // Scroll Reveal Animation
    
    const sr = ScrollReveal({
      origin: 'left',
      distance: '60px',
      duration: 2500,
      delay: 400
    })

    sr.reveal('.home__content')
    sr.reveal('.home__img', {origin: 'right'})
    sr.reveal('.counter', {origin: 'right', interval: 200})

 
  