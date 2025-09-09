function createMenu() {
  const content = document.querySelector("#content");

  const menu_page = document.createElement("div");
  menu_page.id = "menu-page";

  // HERO
  const menu_hero = document.createElement("div");
  menu_hero.className = "menu-hero";

  const h2 = document.createElement("h2");
  h2.textContent = "Our Menu";

  const p = document.createElement("p");
  p.textContent = "A journey through flavors";

  menu_hero.appendChild(h2);
  menu_hero.appendChild(p);

  menu_page.appendChild(menu_hero);

  // STARTERS
  const menu_section_starters = document.createElement("div");
  menu_section_starters.className = "menu-section";

  const h3_starters = document.createElement("h3");
  h3_starters.textContent = "Starters";

  const menu_grid_starters = document.createElement("div");
  menu_grid_starters.className = "menu-grid";

  const starters = [
    {
      name: "Bruschetta",
      desc: "Grilled bread topped with fresh tomatoes, basil & olive oil",
      price: "$8",
    },
    {
      name: "Golden Soup",
      desc: "Creamy pumpkin soup with a touch of saffron",
      price: "$10",
    },
  ];

  starters.forEach((starter) => {
    const div = document.createElement("div");
    div.className = "menu-item";

    const h4 = document.createElement("h4");
    h4.textContent = starter.name;

    const p = document.createElement("p");
    p.textContent = starter.desc;

    const span = document.createElement("span");
    span.className = "price";
    span.textContent = starter.price;

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(span);

    menu_grid_starters.appendChild(div);
  });

  menu_section_starters.appendChild(h3_starters);
  menu_section_starters.appendChild(menu_grid_starters);

  menu_page.appendChild(menu_section_starters);

  // MAIN COURSES
  const menu_section_mains = document.createElement("div");
  menu_section_mains.className = "menu-section";

  const h3_mains = document.createElement("h3");
  h3_mains.textContent = "Main Courses";

  const menu_grid_mains = document.createElement("div");
  menu_grid_mains.className = "menu-grid";

  const mains = [
    {
      name: "Pasta al Tartufo",
      desc: "Homemade pasta with truffle cream sauce",
      price: "$18",
    },
    {
      name: "Filet Mignon",
      desc: "Served with garlic butter and seasonal vegetables",
      price: "$28",
    },
    {
      name: "Sea Bass alla Griglia",
      desc: "Grilled Mediterranean sea bass with lemon and herbs",
      price: "$24",
    },
    {
      name: "Risotto ai Funghi",
      desc: "Creamy Arborio rice with wild mushrooms and parmesan",
      price: "$20.75",
    },
  ];

  mains.forEach((main) => {
    const div = document.createElement("div");
    div.className = "menu-item";

    const h4 = document.createElement("h4");
    h4.textContent = main.name;

    const p = document.createElement("p");
    p.textContent = main.desc;

    const span = document.createElement("span");
    span.className = "price";
    span.textContent = main.price;

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(span);

    menu_grid_mains.appendChild(div);
  });

  menu_section_mains.appendChild(h3_mains);
  menu_section_mains.appendChild(menu_grid_mains);

  menu_page.appendChild(menu_section_mains);

  // DESSERTS
  const menu_section_desserts = document.createElement("div");
  menu_section_desserts.className = "menu-section";

  const h3_desserts = document.createElement("h3");
  h3_desserts.textContent = "Desserts";

  const menu_grid_desserts = document.createElement("div");
  menu_grid_desserts.className = "menu-grid";

  const desserts = [
    {
      name: "Tiramisu",
      desc: "Classic Italian dessert with coffee & mascarpone",
      price: "$9",
    },
    {
      name: "Chocolate Soufflé",
      desc: "Rich dark chocolate with vanilla ice cream",
      price: "$11",
    },
    {
      name: "Panna Cotta",
      desc: "Silky vanilla cream with fresh berry coulis",
      price: "$10",
    },
  ];

  desserts.forEach((dessert) => {
    const div = document.createElement("div");
    div.className = "menu-item";

    const h4 = document.createElement("h4");
    h4.textContent = dessert.name;

    const p = document.createElement("p");
    p.textContent = dessert.desc;

    const span = document.createElement("span");
    span.className = "price";
    span.textContent = dessert.price;

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(span);

    menu_grid_desserts.appendChild(div);
  });

  menu_section_desserts.appendChild(h3_desserts);
  menu_section_desserts.appendChild(menu_grid_desserts);

  menu_page.appendChild(menu_section_desserts);

  content.appendChild(menu_page);
}

export { createMenu };
