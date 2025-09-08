import { createHeroSection } from "./hero-section";
import { createRestaurantContent } from "./restaurant-content";
import { createRestaurantInfo } from "./restaurant-info";
import { createFooter } from "./footer";

function createHomepage() {
  createHeroSection();
  createRestaurantContent();
  createRestaurantInfo();
  createFooter();
}

export { createHomepage };
