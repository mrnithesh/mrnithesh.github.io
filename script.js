document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (backToTopBtn) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopBtn.style.display = "block";
                backToTopBtn.style.opacity = "1";
            } else {
                backToTopBtn.style.opacity = "0";
                setTimeout(() => { // wait for fade out before hiding
                    if (!(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
                       backToTopBtn.style.display = "none";
                    }
                }, 300);
            }
        }
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
    }

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Consider navbar height if it's fixed and opaque
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight - 15; // 15px for extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Active nav link highlighting on scroll
    const sections = document.querySelectorAll('main section');
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + navbarHeight + 50 < sections[index].offsetTop) {} // 50 is an offset
        
        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
             navLinks[index].classList.add('active');
        }
    }

    // Initial call to set active link on page load/refresh
    if (sections.length > 0 && navLinks.length > 0) {
        changeActiveLink(); 
        window.addEventListener('scroll', changeActiveLink);
    }

});