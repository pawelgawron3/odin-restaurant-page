function createMenuHero() {
  const content = document.querySelector("#content");

  const menu_page = document.createElement("div");
  menu_page.id = "menu-page";

  const menu_hero = document.createElement("div");
  menu_hero.className = "menu-hero";

  const h2 = document.createElement("h2");
  h2.textContent = "Our Menu";

  const p = document.createElement("p");
  p.textContent = "A journey through flavors";

  menu_hero.appendChild(h2);
  menu_hero.appendChild(p);

  menu_page.appendChild(menu_hero);

  content.appendChild(menu_page);
}

export { createMenuHero };
