import { createHeroSection } from "./hero-section";
import { createRestaurantContent } from "./restaurant-content";
import { createRestaurantInfo } from "./restaurant-info";

function loadPage() {
  createHeroSection();
  createRestaurantContent();
  createRestaurantInfo();
}

export { loadPage };
