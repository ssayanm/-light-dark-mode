const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const body = document.getElementById("mybody");

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/1_${color}.svg`;
  image2.src = `img/2_${color}.svg`;
  image3.src = `img/3_${color}.svg`;
}

// Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgba(0,0,0,0.5)";
  textBox.style.backgroundColor = "rgba(255,255,255,0.5)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgba(255,255,255,0.5)";
  textBox.style.backgroundColor = "rgba(0,0,0,0.5)";
  textBox.style.color = "rgba(255,255,255,0.5)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.body.classList.toggle("darktheme");

    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.body.classList.toggle("darktheme");

    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
// const currentTheme = localStorage.getItem("theme");
// if (currentTheme) {
//   document.body.classList("darktheme");

//   toggleSwitch.checked = false;
//   darkMode();
// }

// const sunMoonContainer = document.querySelector(".sun-moon-container");

// document.querySelector(".theme-toggle-button").addEventListener("click", () => {
//   document.body.classList.toggle("darktheme");
// });
