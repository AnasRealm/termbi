import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          Get your own <br /> restaurant website
        </h1>
        <p>
          Termbi's booking solution for restaurants makes a lot of your daily
          business tasks much easier, so that you can fully focus on your
          guests.
        </p>
        <Link to="/restaurant/register">
          <button className="hero-button">Try Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
