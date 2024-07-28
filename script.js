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

if (document.getElementById("descriptionButton")) {
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
}
if (document.getElementById("instructionButton")) {
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
}
if (document.getElementById("account-btn")) {
  document.getElementById("account-btn").addEventListener("click", function () {
    setActiveButton("account-btn");
    showSection("account-section");
  });

  document.getElementById("wallet-btn").addEventListener("click", function () {
    console.log("wallet");

    setActiveButton("wallet-btn");
    showSection("wallet-section");
  });

  document
    .getElementById("transactions-btn")
    .addEventListener("click", function () {
      setActiveButton("transactions-btn");
      showSection("transactions-section");
    });

  document.getElementById("orders-btn").addEventListener("click", function () {
    setActiveButton("orders-btn");

    showSection("orders-section");
  });

  function setActiveButton(buttonId) {
    var buttons = document.querySelectorAll(".side-controller button");
    buttons.forEach(function (button) {
      button.classList.remove("active-button");
    });
    document.getElementById(buttonId).classList.add("active-button");
  }

  function showSection(sectionId) {
    var sections = document.querySelectorAll(".profile-section");
    sections.forEach(function (section) {
      if (section.id === sectionId) {
        section.classList.add("show");
      } else {
        section.classList.remove("show");
      }
    });
  }
}

const toggleButton = document.getElementById("white-mode-toggle");
const toggleButton2 = document.getElementById("white-mode-toggle2");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("white-mode");
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("white-mode");

  let theme = "light";
  if (document.body.classList.contains("white-mode")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});



toggleButton2.addEventListener("click", () => {
  document.body.classList.toggle("white-mode");

  let theme = "light";
  if (document.body.classList.contains("white-mode")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});
