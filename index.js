const bodyTag = document.querySelector("body");
const themeSwitcherWrapper = document.querySelector(".theme-switcher");
const themeSwitcherIcon = document.querySelector(".theme-switcher--icon");

const toggleTheme = () => {
  if (themeSwitcherIcon.classList.contains("far")) {
    themeSwitcherIcon.classList.remove("far");
    themeSwitcherIcon.classList.add("fas");
    bodyTag.classList.add("dark");
  } else {
    themeSwitcherIcon.classList.remove("fas");
    themeSwitcherIcon.classList.add("far");
    bodyTag.classList.remove("dark");
  }
};

themeSwitcherWrapper.addEventListener("click", toggleTheme);
