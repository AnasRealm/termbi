import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section className="pricing container">
      <h2 className="pricing-title">
        <span className="red">Pricing</span> Packages
      </h2>
      <div className="pricing-grid">
        <div className="pricing-card free">
          <img
            className="Intersect"
            src="/images/Intersect (1).png"
            alt=""
          />
          <h3>Free</h3>
          <div className="price">
            <span className="amount">$0</span>
            <span className="period">/month</span>
          </div>
          <div className="features">
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
          </div>
          <button className="select-btn">Select Plan</button>
        </div>

        <div className="pricing-card premium">
          <img
            className="Intersect"
            src="/images/Intersect.png"
            alt=""
          />
          <h3>Premium</h3>
          <div className="price">
            <span className="amount">$45</span>
            <span className="period">/month</span>
          </div>
          <div className="features">
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Reservation</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Ordering</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Marketing</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
          </div>
          <button className="select-btn premium-btn">Select Plan</button>
        </div>

        <div className="pricing-card enterprise">
          <img
            className="Intersect"
            src="/images/Intersect (1).png"
            alt=""
          />
          <h3>Enterprise</h3>
          <div className="price">
            <span className="amount">$75</span>
            <span className="period">/month</span>
          </div>
          <div className="features">
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
            <div className="feature">
              <img
                className="check"
                src="/images/check.png"
                alt=""
              />
              <span>Services</span>
            </div>
          </div>
          <button className="select-btn">Select Plan</button>
        </div>
      </div>
    </section>
  );
}
