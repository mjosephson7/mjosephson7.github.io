document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});


function myFunction() {
    var x = document.getElementById("myLinks");
    x.classList.toggle("active");
}

// Close the menu when it is clicked
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.navBar li a').forEach(link => {
        link.addEventListener('click', () => {
            var x = document.getElementById("myLinks");
            x.classList.remove("active");
        });
    });
});


// Smooth scroll to anchor links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start'      
                });
            }
        });
    });
});
