function createRestaurantContent() {
  const content = document.querySelector("#content");

  const restaurant_content = document.createElement("div");
  restaurant_content.id = "restaurant-content";

  const restaurant_content_col_first = document.createElement("div");
  const restaurant_content_col_second = document.createElement("div");
  const restaurant_content_col_third = document.createElement("div");

  restaurant_content_col_first.className = "restaurant-content-col";
  restaurant_content_col_second.className = "restaurant-content-col";
  restaurant_content_col_third.className = "restaurant-content-col";

  const i_first = document.createElement("i");
  const i_second = document.createElement("i");
  const i_third = document.createElement("i");

  i_first.classList.add("mdi", "mdi-pasta");
  i_second.classList.add("mdi", "mdi-glass-wine");
  i_third.classList.add("mdi", "mdi-silverware-fork-knife");

  const h3_first = document.createElement("h3");
  const h3_second = document.createElement("h3");
  const h3_third = document.createElement("h3");

  h3_first.textContent = "Passion and Tradition";
  h3_second.textContent = "Fine Wines";
  h3_third.textContent = "Elegant Ambience";

  const p_first = document.createElement("p");
  const p_second = document.createElement("p");
  const p_third = document.createElement("p");

  p_first.textContent =
    "We combine authentic recipes with a modern touch, to serve you unforgettable flavors.";
  p_second.textContent =
    "Our carefully selected wine list complements every dish and enriches your dining experience.";
  p_third.textContent =
    "A refined interior where every detail is designed for comfort and elegance.";

  restaurant_content_col_first.appendChild(i_first);
  restaurant_content_col_first.appendChild(h3_first);
  restaurant_content_col_first.appendChild(p_first);

  restaurant_content_col_second.appendChild(i_second);
  restaurant_content_col_second.appendChild(h3_second);
  restaurant_content_col_second.appendChild(p_second);

  restaurant_content_col_third.appendChild(i_third);
  restaurant_content_col_third.appendChild(h3_third);
  restaurant_content_col_third.appendChild(p_third);

  restaurant_content.appendChild(restaurant_content_col_first);
  restaurant_content.appendChild(restaurant_content_col_second);
  restaurant_content.appendChild(restaurant_content_col_third);

  content.appendChild(restaurant_content);
}

export { createRestaurantContent };
