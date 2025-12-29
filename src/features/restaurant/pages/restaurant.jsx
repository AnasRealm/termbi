import React from 'react';
import { MenuLayout } from "../../../shared/layouts/MenuLayout";
import AboutUs from "../components/about-us/AboutUs";
import HeroRestaurant from "../components/hero-restaurant/HeroRestaurant";
import MenuSection from "../components/menu-section/MenuSection";

export default function Restaurant() {
  const restaurant = {
    name: "Termbi Restaurant",
    description: "Sandwiches, Fries & Burger with best taste awaits you.",
    address: "2255 Nw 2nd Ave, Miami, FL 37214",
    rating: "5.0",
    about: "Our journey began with a passion for creating unforgettable dining experiences."
  };

  return (
    <MenuLayout>
      <HeroRestaurant restaurant={restaurant} />
      <AboutUs restaurant={restaurant} />
      <MenuSection />
    </MenuLayout>
  );
}