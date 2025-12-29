import { Link } from "react-router-dom";
import './HeroRestaurant.css';
import heroImg from '../../../../shared/assets/images/Hero img02.png';

const HeroRestaurant = ({ restaurant }) => {
  return (
    <div className="hero-restaurant-container">
      <div className="hero-restaurant-content">
        <h1>
          Best <span className="highlight">Food</span>, Best <span className="highlight">Services</span>!
        </h1>
        <p className="subtext">
          {restaurant?.description || "Sandwiches, Fries & Burger with best taste awaits you."}
        </p>
        
        <div className="location-info">
          <span className="icon">📍</span>
          <span>{restaurant?.address || "2255 Nw 2nd Ave, Miami, FL 37214"}</span>
        </div>

        <div className="rating-info">
          <span>Rating:</span>
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="score">{restaurant?.rating || "5.0"}</span>
        </div>

        <Link to={`/reservation`}>
          <button className="reserve-btn">Reserve a table</button>
        </Link>
      </div>
      
      <div className="hero-restaurant-image">
        <img 
          src={restaurant?.image || heroImg} 
          alt={restaurant?.name || "Delicious Food"} 
        />
      </div>
    </div>
  );
};

export default HeroRestaurant;