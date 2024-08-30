document.addEventListener("DOMContentLoaded", () => {

    // Toggle navigation links visibility
    const togglebtn = document.querySelector('.toggle-btn');

    function toggleNavLinks() {
        const navLinks = document.querySelector('.nav-links');
        const heroContent = document.querySelector('.hero-content');

        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            heroContent.style.zIndex = '1';
        } else {
            navLinks.style.display = 'flex';
            heroContent.style.zIndex = '-1';
        }
    }

    if (togglebtn) {
        togglebtn.addEventListener('click', toggleNavLinks);
    }

    // Hide navigation links when any link is clicked
    function handleNavLinkClick() {
        const navLinks = document.querySelector('.nav-links');
        const heroContent = document.querySelector('.hero-content');
        navLinks.style.display = 'none';
        heroContent.style.zIndex = '1';
    }

    function setupNavLinkListeners() {
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
    }

    // Generate bubbles for animation
    function generateBubbles() {
        const bubbleContainer = document.querySelector('.bubbles');
        const numBubbles = 40;

        for (let i = 0; i < numBubbles; i++) {
            const bubble = document.createElement('span');
            bubble.classList.add('bubble');

            const size = Math.random() * 30 + 10;
            const leftOrRight = Math.random() < 0.5 ? 'left' : 'right';
            const pos = Math.random() * 100;
            const top = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 5;
            const animationName = `moveBubble${Math.floor(Math.random() * 3) + 1}`;

            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style[leftOrRight] = `${pos}%`;
            bubble.style.top = `${top}%`;
            bubble.style.animation = `${animationName} ${animationDuration}s infinite`;

            bubbleContainer.appendChild(bubble);
        }
    }

    // Scroll to the next section
    const nextButton = document.querySelector('.next');
    const sectionIds = ['home', 'about', 'services', 'contact'];

    function scrollToNextSection() {
        const currentIndex = sectionIds.findIndex(id => {
            const element = document.getElementById(id);
            if (element) {
                const rect = element.getBoundingClientRect();
                return rect.top >= 0 && rect.top < window.innerHeight;
            }
            return false;
        });

        const nextIndex = (currentIndex + 1) % sectionIds.length;
        const nextSectionId = sectionIds[nextIndex];
        const nextSection = document.getElementById(nextSectionId);
        
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    if (nextButton) {
        nextButton.addEventListener('click', scrollToNextSection);
    }

    setupNavLinkListeners();
    generateBubbles();
});
