// Add interactivity here if needed
// Example: Highlight active navigation link
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(lnk => lnk.classList.remove("active"));
    link.classList.add("active");
  });
});