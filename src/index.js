import "./styles.css";
import { loadHomepage } from "./initial-page-load";
import { clearContent } from "./clearContent";
import { createHome } from "./createHome";
import { createMenu } from "./menu";
import { createAbout } from "./about";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

homeBtn.addEventListener("click", () => {
  clearContent();
  createHome();
});
menuBtn.addEventListener("click", () => {
  clearContent();
  createMenu();
});
aboutBtn.addEventListener("click", () => {
  clearContent();
  createAbout();
});

loadHomepage();
