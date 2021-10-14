import { tsParticles } from "tsparticles";

tsParticles.load('tsparticles', {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 750
      }
    },
    "color": {
      "value": [
        "#ff3800",
        "#ff4700",
        "#ff5300",
        "#ff5d00",
        "#ff6500",
        "#ff6d00",
        "#ff7300",
        "#ff7900",
        "#ff7e00",
        "#ff8300",
        "#ff8a12",
        "#ff8e21",
        "#ff932c",
        "#ff9836",
        "#ff9d3f",
        "#ffa148",
        "#ffa54f",
        "#ffa957",
        "#ffad5e",
        "#ffb165",
        "#ffb46b",
        "#ffb872",
        "#ffbb78",
        "#ffbe7e",
        "#ffc184",
        "#ffc489",
        "#ffc78f",
        "#ffc994",
        "#ffcc99",
        "#ffce9f",
        "#ffd1a3",
        "#ffd3a8",
        "#ffd5ad",
        "#ffd7b1",
        "#ffd9b6",
        "#ffdbba",
        "#ffddbe",
        "#ffdfc2",
        "#ffe1c6",
        "#ffe3ca",
        "#ffe4ce",
        "#ffe6d2",
        "#ffe8d5",
        "#ffe9d9",
        "#ffebdc",
        "#ffece0",
        "#ffeee3",
        "#ffefe6",
        "#fff0e9",
        "#fff2ec",
        "#fff3ef",
        "#fff4f2",
        "#fff5f5",
        "#fff6f7",
        "#fff8fb",
        "#fff9fd",
        "#fef9ff",
        "#fcf7ff",
        "#f9f6ff",
        "#f7f5ff",
        "#f5f3ff",
        "#f3f2ff",
        "#f0f1ff",
        "#eff0ff",
        "#edefff",
        "#ebeeff",
        "#e9edff",
        "#e7ecff",
        "#e6ebff",
        "#e4eaff",
        "#e3e9ff",
        "#e1e8ff",
        "#e0e7ff",
        "#dee6ff",
        "#dde6ff",
        "#dce5ff",
        "#dae5ff",
        "#d9e3ff",
        "#d8e3ff",
        "#d7e2ff",
        "#d6e1ff",
        "#d4e1ff",
        "#d3e0ff",
        "#d2dfff",
        "#d1dfff",
        "#d0deff",
        "#cfddff",
        "#cfddff",
        "#cedcff",
        "#cddcff",
        "#cfdaff",
        "#cfdaff",
        "#ced9ff",
        "#cdd9ff",
        "#ccd8ff",
        "#ccd8ff",
        "#cbd7ff",
        "#cad7ff",
        "#cad6ff",
        "#c9d6ff",
        "#c8d5ff",
        "#c8d5ff",
        "#c7d4ff",
        "#c6d4ff",
        "#c6d4ff",
        "#c5d3ff",
        "#c5d3ff",
        "#c5d2ff",
        "#c4d2ff",
        "#c3d2ff",
        "#c3d1ff"
      ]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000"
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.9,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#aaaaaa",
      "opacity": 1,
      "width": 0.5
    },
    "move": {
      "enable": true,
      "speed": 0.15,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 3
        },
        "remove": {
          "particles_nb": 0
        }
      }
    },
    "retina_detect": true
  }
});