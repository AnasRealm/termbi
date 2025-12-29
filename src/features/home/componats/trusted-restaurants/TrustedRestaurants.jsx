import React from "react";
import { Link } from "react-router-dom";
import "./TrustedRestaurants.css";

const mockRestaurants = [
  {
    id: 1,
    name: "Taverna",
    logoUrl: "/src/shared/assets/images/Border (1).png",
  },
  {
    id: 2,
    name: "Melty Way",
    logoUrl: "/src/shared/assets/images/Border (2).png",
  },
  {
    id: 3,
    name: "Good Taste",
    logoUrl: "/src/shared/assets/images/Border (3).png",
  },
  {
    id: 4,
    name: "Sbarro",
    logoUrl: "/src/shared/assets/images/Border (4).png",
  },
  { id: 5, name: "Adrienne", logoUrl: "/src/shared/assets/images/Border.png" },
];

function RestaurantLogo({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant.id}/menu`} className="restaurant-logo">
      <img src={restaurant.logoUrl} alt={restaurant.name} />
    </Link>
  );
}

export default function TrustedRestaurants() {
  return (
    <section className="trusted-restaurants">
      <h2 className="trust-title">
        restaurants already trust in <img src="/src/shared/assets/images/Group (2).png" alt="" />
      </h2>
      <div className="logos-grid">
        {mockRestaurants.map((restaurant) => (
          <RestaurantLogo key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}
