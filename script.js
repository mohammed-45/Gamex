document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.getElementById("mySideNavbar").classList.toggle("menu-open");
  });

function closeNav() {
  document.getElementById("mySideNavbar").classList.remove("menu-open");
}

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("header");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.navbar-nav a[data-section="${sectionId}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`.navbar-nav a[data-section="${sectionId}"]`)
          .classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", scrollActive);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.getElementById("toggleButton");
//   const hiddenCards = document.querySelectorAll(".hidden-card");

//   toggleButton.addEventListener("click", function () {
//     if (toggleButton.textContent.includes("Show All")) {
//       hiddenCards.forEach((card) => {
//         card.classList.add("show"); // Add the 'show' class to reveal hidden cards
//       });
//       toggleButton.textContent = "Show Less"; // Change button text
//     } else {
//       hiddenCards.forEach((card) => {
//         card.classList.remove("show"); // Remove the 'show' class to hide cards
//       });
//       toggleButton.textContent = "Show All"; // Change button text
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const section = this.closest(".section");
      const hiddenCards = section.querySelectorAll(".hidden-card");

      if (this.textContent.includes("Show All")) {
        hiddenCards.forEach((card) => {
          card.classList.add("show"); // Add the 'show' class to reveal hidden cards
        });
        this.textContent = "Show Less"; // Change button text
      } else {
        hiddenCards.forEach((card) => {
          card.classList.remove("show"); // Remove the 'show' class to hide cards
        });
        this.textContent = "Show All"; // Change button text
      }
    });
  });
});

document
  .getElementById("descriptionButton")
  .addEventListener("click", function () {
    var descriptionText = document.getElementById("descriptionText");
    var instructionText = document.getElementById("instructionText");
    document.getElementById("descriptionButton").classList.add("active");
    document.getElementById("instructionButton").classList.remove("active");
    if (descriptionText.classList.contains("hidden")) {
      instructionText.classList.remove("visible");
      instructionText.classList.add("hidden");
      descriptionText.classList.remove("hidden");
      descriptionText.classList.add("visible");
   
    }
  });

document
  .getElementById("instructionButton")
  .addEventListener("click", function () {
    var descriptionText = document.getElementById("descriptionText");
    var instructionText = document.getElementById("instructionText");
    document.getElementById("instructionButton").classList.add("active");
    document.getElementById("descriptionButton").classList.remove("active");
    if (instructionText.classList.contains("hidden")) {
      descriptionText.classList.remove("visible");
      descriptionText.classList.add("hidden");
      instructionText.classList.remove("hidden");
      instructionText.classList.add("visible");
     
    }
  });
