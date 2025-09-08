import restaurantImg from "./assets/glenov-brankovic-unsplash.jpg";

function createRestaurantInfo() {
  const content = document.querySelector("#content");

  const restaurant_info = document.createElement("div");
  restaurant_info.id = "restaurant-info";

  const restaurant_info_text = document.createElement("div");
  restaurant_info_text.className = "restaurant-info-text";

  const h2 = document.createElement("h2");
  h2.textContent = "Our Story";

  const hr = document.createElement("hr");

  const p_first = document.createElement("p");
  p_first.textContent =
    "Luna et Sol was founded in 2015 with a passion for authentic flavors and elegant dining experiences. Our chefs combine traditional recipes with modern techniques, creating unforgettable meals for every guest.";

  const p_second = document.createElement("p");
  p_second.textContent =
    "From the carefully selected ingredients to the cozy yet refined interior, every detail is designed to make your visit special. We believe that dining is not just about food, but about creating memories.";

  restaurant_info_text.appendChild(h2);
  restaurant_info_text.appendChild(hr);
  restaurant_info_text.appendChild(p_first);
  restaurant_info_text.appendChild(p_second);

  const restaurant_info_image = document.createElement("div");
  restaurant_info_image.className = "restaurant-info-image";

  const img = document.createElement("img");
  img.src = restaurantImg;
  img.alt = "Restaurant interior";

  restaurant_info_image.appendChild(img);

  restaurant_info.appendChild(restaurant_info_text);
  restaurant_info.appendChild(restaurant_info_image);

  content.appendChild(restaurant_info);
}

export { createRestaurantInfo };
