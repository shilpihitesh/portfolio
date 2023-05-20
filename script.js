// script.js

// Add an event listener to the "Learn More" button
var learnMoreBtn = document.querySelector('.btn');
learnMoreBtn.addEventListener('click', function(event) {
  event.preventDefault();
  alert('You clicked the "Learn More" button!');
});

// Smooth scrolling for navigation links
var navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Add a class to the navigation menu when scrolling down
var header = document.querySelector('header');
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
