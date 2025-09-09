import aboutImg from "./assets/lucas-law-unsplash.jpg";

function createAbout() {
  const content = document.querySelector("#content");

  const about_page = document.createElement("div");
  about_page.id = "about-page";

  // HERO
  const about_hero = document.createElement("div");
  about_hero.className = "about-hero";

  const h2 = document.createElement("h2");
  h2.textContent = "About Us";

  const about_hero_p = document.createElement("p");
  about_hero_p.textContent = "A story of passion, flavor, and tradition";

  about_hero.appendChild(h2);
  about_hero.appendChild(about_hero_p);

  about_page.appendChild(about_hero);

  // CONTENT
  const about_content = document.createElement("div");
  about_content.className = "about-content";

  const about_text = document.createElement("div");
  about_text.className = "about-text";

  const p_first = document.createElement("p");
  p_first.textContent =
    "At Luna et Sol, we believe that dining is more than just a meal - it's an experience. Since 2015, our mission has been to bring people together around the table with flavors that blend tradition and innovation.";
  const p_second = document.createElement("p");
  p_second.textContent =
    "Our chefs carefully select seasonal ingredients, creating dishes that celebrate authenticity and elegance. Whether you're here for an intimate dinner or a special occasion, every detail is designed to make your time unforgettable.";

  about_text.appendChild(p_first);
  about_text.appendChild(p_second);

  const about_image = document.createElement("div");
  about_image.className = "about-image";

  const img = document.createElement("img");
  img.src = aboutImg;
  img.alt = "Luna et Sol example dish";

  about_image.appendChild(img);

  about_content.appendChild(about_text);
  about_content.appendChild(about_image);

  about_page.appendChild(about_content);

  content.appendChild(about_page);
}

export { createAbout };
