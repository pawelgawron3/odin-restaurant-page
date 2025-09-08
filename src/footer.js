function createFooter() {
  const content = document.querySelector("#content");

  const footer = document.createElement("footer");

  const h2 = document.createElement("h2");
  h2.className = "footer-logo";
  h2.textContent = "Luna et Sol";

  footer.appendChild(h2);

  const footer_social = document.createElement("div");
  footer_social.className = "footer-social";

  const i_first = document.createElement("i");
  const i_second = document.createElement("i");
  const i_third = document.createElement("i");

  i_first.classList.add("mdi", "mdi-facebook");
  i_second.classList.add("mdi", "mdi-instagram");
  i_third.classList.add("mdi", "mdi-twitter");

  const a_first = document.createElement("a");
  const a_second = document.createElement("a");
  const a_third = document.createElement("a");

  a_first.href = "#";
  a_second.href = "#";
  a_third.href = "#";

  a_first.appendChild(i_first);
  a_second.appendChild(i_second);
  a_third.appendChild(i_third);

  footer_social.appendChild(a_first);
  footer_social.appendChild(a_second);
  footer_social.appendChild(a_third);

  footer.appendChild(footer_social);

  const p = document.createElement("p");
  p.className = "footer-copy";
  p.textContent = "Copyright © 2025 Luna et Sol. All rights reserved.";

  footer.appendChild(p);

  content.appendChild(footer);
}

export { createFooter };
