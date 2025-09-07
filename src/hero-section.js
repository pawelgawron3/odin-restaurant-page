function createHeroSection() {
  const content = document.querySelector("#content");

  const hero_section = document.createElement("div");
  const hero_content = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  hero_section.id = "hero-section";
  hero_content.className = "hero-content";
  h2.textContent = "Fine Dining Experience";
  p.textContent = "The taste, that you will remember for a long time.";

  hero_content.appendChild(h2);
  hero_content.appendChild(p);

  hero_section.appendChild(hero_content);

  content.appendChild(hero_section);
}

export { createHeroSection };
