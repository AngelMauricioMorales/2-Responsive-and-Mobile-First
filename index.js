const toggleButton = document.getElementById("boton");
const backdrop = document.getElementById("backdrop");

toggleButton.addEventListener("click", function () {
  backdrop.classList.remove("hide-backdrop");
});

backdrop.addEventListener("click", function () {
  backdrop.classList.add("hide-backdrop");
});
