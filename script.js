const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");

const images = document.querySelectorAll("img");

const textBox = document.getElementById("text-box");

const iconMode = ["fa-moon", "fa-sun"];
const theme = ["Dark", "Light"];

function imageMode(mode) {
  images.forEach(
    img =>
      (img.src = img.src.replace(
        theme[1 - mode].toLowerCase(),
        theme[mode].toLowerCase()
      ))
  );
}

function toggleMode(mode) {
  nav.style.backgroundColor = `rgb(${255 * mode} ${255 * mode} ${
    255 * mode
  } / 50%)`;
  textBox.style.backgroundColor = `rgb(${255 * (mode - 1)} rgb(${
    255 * (mode - 1)
  } rgb(${255 * (mode - 1)} / 50%)`;
  toggleIcon.children[0].textContent = `${theme[mode]} Mode`;
  toggleIcon.children[1].classList.replace(iconMode[1 - mode], iconMode[mode]);
  imageMode(mode);
}
function switchTheme(event) {
  document.documentElement.setAttribute(
    "data-theme",
    theme[1 - event.target.checked].toLowerCase()
  );
  localStorage.setItem("theme", theme[1 - event.target.checked].toLowerCase());
  toggleMode(1 - event.target.checked); //0 for dark theme, 1 for light theme
}

toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleMode(0);
  }
}
