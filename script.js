// Particles.js configuration
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 0,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 0
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "bottom-left",
        "random": false,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 0,
          "rotateY": 0
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 50,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 50,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 80,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

// Get the globe-container element
const globeContainer = document.getElementById('globe-container');

// Store the initial position of the globe-container
const initialX = globeContainer.offsetLeft;

// Listen for scroll events
window.addEventListener('scroll', function() {
  // Calculate the scroll progress
  const scrollProgress = window.scrollY * 5 / (document.documentElement.scrollHeight - window.innerHeight);
  
  // Calculate the target position for the globe-container
  const targetX = -500 * scrollProgress; // Adjust the value based on the desired distance to move
  
  // Smoothly move the globe-container using CSS transitions
  globeContainer.style.transition = 'left 0.1s ease-in-out';
  globeContainer.style.left = `${initialX + targetX}px`;
});
