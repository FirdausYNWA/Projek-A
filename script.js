let menu = document.querySelector("#menu-icon");
let navigation = document.querySelector(".navigation");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navigation.classList.toggle("open");
};

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 400,
  reset: true,
});

sr.reveal(".hero-text", { delay: 200, origin: "top" });
sr.reveal(".hero-img", { delay: 450, origin: "top" });
sr.reveal(".icons", { delay: 450, origin: "top" });
