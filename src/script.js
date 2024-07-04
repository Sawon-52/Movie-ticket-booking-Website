function activeRoute() {
  // Get the current path or URL segment
  const path = window.location.pathname;

  // Select the navigation menu
  const navMenu = document.getElementById("nav-menu");

  // Select all navigation links
  const navLinks = navMenu.getElementsByTagName("a");
  // Loop through each link and check if its href matches the current path
  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute("href") === path) {
      // Add class to the parent <li> element
      navLinks[i].parentNode.classList.add("text-secondary");
    }
  }
}
activeRoute();

function slider() {
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#image-container img");
    const totalImages = images.length;
    let currentIndex = 0;

    const updateSlider = () => {
      images.forEach((image, index) => {
        if (index === currentIndex) {
          image.classList.remove("hidden");
        } else {
          image.classList.add("hidden");
        }
      });
    };

    document.getElementById("next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider();
    });

    document.getElementById("prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateSlider();
    });

    updateSlider(); // Initialize slider with the first image
  });
}
slider();
