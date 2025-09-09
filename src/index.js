import "./styles.css";
import { loadPage } from "./initial-page-load";
import { clearContent } from "./clearContent";
import { createHomepage } from "./createHomepage";
import { createMenu } from "./menu";

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

homeBtn.addEventListener("click", () => {
  clearContent();
  createHomepage();
});
menuBtn.addEventListener("click", () => {
  clearContent();
  createMenu();
});
aboutBtn.addEventListener("click", () => {
  clearContent();
});

loadPage();
