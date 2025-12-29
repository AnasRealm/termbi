import React from "react";
import "./FeaturesSection.css";
import groupImg from "/images/Group (2).png";
import dashboardImg from "/images/Rectangle 7539.png";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-title ">
           <img src={groupImg} alt="" /> Features
          </h2>
      <div className="features-container">
         
        <div className="features-content">
         
          <div className="dashboard-section">
            <h3 className="dashboard-title">Dashboard</h3>
            <p className="dashboard-description">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
              Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et
              Dolore Magna Aliqua. Ut Enim Ad Minim Veniam,
              Quis Nostrud Exercitation Ullamco Laboris Nisl Ut
              Aliquip Ex Ea Commodo Consequat.
            </p>
          </div>
        </div>
        
        <div className="dashboard-image">
          <img src={dashboardImg} alt="Dashboard" />
        </div>
      </div>
    </section>
  );
}