import React from "react";
import "./AboutUs.css";

export default function AboutUs({ restaurant }) {
  return (
    <section className="about-us">
      <div className="about-container">
        <h2 className="about-title">About us</h2>
        <div className="about-content">
          <p>
            Welcome to <span className="highlight">{restaurant?.name || "Termbi"}</span>, where culinary excellence meets warm hospitality.
          </p>
          <p>
            {restaurant?.about || "Our journey began with a passion for creating unforgettable dining experiences."}
          </p>
          <p>
            At <span className="highlight">{restaurant?.name || "Termbi"}</span>, we believe in using the freshest ingredients to craft dishes that delight the senses.
          </p>
        </div>
        
        {/* <div className="about-menu-preview">
          <h3 className="menu-title">Our Menu</h3>
          <p className="menu-subtitle">Explore our special, tasteful dishes on the Restaurant Menu!</p>
          
          <div className="menu-categories">
            <span className="category active">Popular</span>
            <span className="category">Salad</span>
            <span className="category">Pasta</span>
            <span className="category">Sandwiches</span>
            <span className="category">Pizza</span>
            <span className="category">Burger</span>
            <span className="category">Juice</span>
          </div>
          
          <div className="menu-actions">
            <button className="menu-btn outline">View as Cards</button>
            <button className="menu-btn outline">View as List</button>
            <button className="menu-btn outline">Download Menu</button>
          </div>
        </div> */}
      </div>
    </section>
  );
}