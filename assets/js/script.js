const colorScheme = document.querySelectorAll('[name="scheme"]');

// store theme
const storeScheme = function (scheme) {
  localStorage.setItem("scheme", scheme);
};

// set theme when visitor returns
const setScheme = function () {
  const activeScheme = localStorage.getItem("scheme");
  colorScheme.forEach((themeOption) => {
    if (themeOption.id === activeScheme) {
      themeOption.checked = true;
    }
  });
};

colorScheme.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeScheme(themeOption.id);
  });
});

document.onload = setScheme();
