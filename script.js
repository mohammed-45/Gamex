document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.getElementById("mySideNavbar").classList.toggle("menu-open");
  });

function closeNav() {
  document.getElementById("mySideNavbar").classList.remove("menu-open");
}


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    
    function scrollActive() {
      const scrollY = window.pageYOffset;
      
      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; 
        sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.navbar-nav a[data-section="${sectionId}"]`).classList.add("active");
        } else {
          document.querySelector(`.navbar-nav a[data-section="${sectionId}"]`).classList.remove("active");
        }
      });
    }
    
    window.addEventListener("scroll", scrollActive);
  });
  