// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-90px";
//   }
// }






const words = ["graphic designer", "storyteller", "illustrator", "researcher", "creative thinker", "brand designer", "multimedia designer", "web designer", "coder", "motion graphic designer", "animator", "visual communicator", ];
let index = 0;
const wordSpan = document.getElementById("dynamic-word");

setInterval(() => {
  wordSpan.style.opacity = 0; // fade out
  setTimeout(() => {
    index = (index + 1) % words.length;
    wordSpan.textContent = words[index];
    wordSpan.style.opacity = 1; // fade in
  }, 300);
}, 2000);







window.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("scrollTrack");
    const baseText = track.querySelector(".scroll-text").textContent;
    
    // Duplicate the scroll-text until the total length exceeds the screen width * 2
    while (track.scrollWidth < window.innerWidth * 2) {
      const clone = document.createElement("p");
      clone.className = "scroll-text";
      clone.textContent = baseText;
      track.appendChild(clone);
    }
  });








document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const scrollBtn = document.getElementById("scrollBtn");
    const section1 = document.getElementById("section1");
    const content = document.getElementById('content');
    const section2 = document.getElementById("section2");
  
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > 0) {
        navbar.classList.add("scrolling-down");
      } else {
        navbar.classList.remove("scrolling-down");
      }
  
      // calculate opacity
      const contentHeight = section1.offsetHeight;
      const fadePoint = 200; // start fade at this scroll position
      let opacity = 1 - currentScrollTop / (contentHeight - fadePoint);
      if (opacity >= 0) {
        content.style.opacity = opacity;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    const scrollToElement = (element, duration, offsetSubtraction = 0) => {
      const startPosition = window.pageYOffset;
      const targetPosition = element.offsetTop - offsetSubtraction;
      const distanceToScroll = targetPosition - startPosition;
      let startTime = null;
  
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
  
      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = easeInOutQuad(timeElapsed, startPosition, distanceToScroll, duration);
        window.scrollTo(0, progress);
  
        if (timeElapsed < duration) {
          window.requestAnimationFrame(animation);
        }
      };
  
      window.requestAnimationFrame(animation);
    };
  
    scrollBtn.addEventListener("click", () => {
      scrollToElement(section2, 1200, 50); // Scrolls to 50 pixels above the top of secondaryPage
    });
  });
  