const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
document.addEventListener('DOMContentLoaded', (event) => {
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});
// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

    const toggleButton = document.getElementById('dark-mode-toggle');
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Save the user preference for future visits.
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check if the user has previously chosen a preference.
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.image-reveal-container');
    const colorImage = container.querySelector('.image-color');
    const hiddenMessage = container.querySelector('.hidden-message');
    const size = 200; // The size of the circle visibility area
    let clickCount = 0; // Initialize click counter
    const earthContainer = document.querySelector('.earth-image-reveal');
    const earthColorImage = earthContainer.querySelector('.earth-color');
    let earthClickCount = 0; // Initialize click counter for Earth image

    function expandCircle(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        colorImage.style.clipPath = `circle(${size}px at ${x}px ${y}px)`;
        hiddenMessage.style.opacity = 1;
        console.log('Mouse move: Circle expanded');
    }

    function resetCircle() {
        colorImage.style.clipPath = 'circle(0% at 50% 50%)';
        hiddenMessage.style.opacity = 0;
        console.log('Mouse leave: Circle reset');
    }

    container.addEventListener('mousemove', expandCircle);
    container.addEventListener('mouseleave', resetCircle);

    // Event listener for the click
    container.addEventListener('click', function() {
        clickCount++;
        console.log(`Circle clicked: ${clickCount} time(s)`);

        if (clickCount === 7) {
            colorImage.style.transition = 'clip-path 3s ease-out';
            colorImage.style.clipPath = 'circle(150% at 50% 50%)';
            hiddenMessage.style.opacity = 0;
            // Display the message in French after 5 clicks
        hiddenMessage.innerText = "Il faut différents efforts, mais l'effort de chacun pour sauver la Terre";
        hiddenMessage.style.opacity = 1;

            console.log('Third click: Image revealed');

            // Stop listening to mouse events to prevent any changes during the transition
            container.removeEventListener('mousemove', expandCircle);
            container.removeEventListener('mouseleave', resetCircle);

            // Reset click counter after a delay to allow for the transition to complete
            setTimeout(() => {
                clickCount = 0;
                console.log('Click counter reset');
                hiddenMessage.innerText = "Vous avez un effet sur la nature";
            colorImage.style.clipPath = 'circle(0% at 50% 50%)'; // Reset the image to its initial state
            hiddenMessage.style.opacity = 0;
            }, 5000);
            container.classList.add('disabled');
        }
    });
    earthContainer.addEventListener('click', function() {
        earthClickCount++;
        console.log(`Earth image clicked: ${earthClickCount} time(s)`);
        
        if (earthClickCount === 7) {
            earthColorImage.style.transition = 'clip-path 2s ease-out';
            earthColorImage.style.clipPath = 'circle(150% at 50% 50%)';
            
            console.log('Seventh click: Earth image revealed');
            
            setTimeout(() => {
                earthClickCount = 0;
                console.log('Earth click counter reset');
                earthColorImage.style.clipPath = 'circle(0% at 50% 50%)'; // Reset the image to its initial state
            }, 10000); // Time after which to reset the image
        }
    });
});
// set year