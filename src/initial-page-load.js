import { createHeroSection } from "./hero-section";
import { createRestaurantContent } from "./restaurant-content";
import { createRestaurantInfo } from "./restaurant-info";
import { createFooter } from "./footer";

function loadPage() {
  createHeroSection();
  createRestaurantContent();
  createRestaurantInfo();
  createFooter();
}

export { loadPage };
