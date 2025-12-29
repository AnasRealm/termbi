import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./RestaurantRegister.css";
import Navbar from "../../../../shared/components/navbar/Navbar";

export default function RestaurantRegister() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (currentStep === 4) {
      const timer = setTimeout(() => {
        navigate("/restaurant/1/menu");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, navigate]);

 
  const schema = Yup.object().shape({
    restaurantName: Yup.string().required("Restaurant name is required"),
    restaurantAddress: Yup.string().required("Restaurant address is required"),
    restaurantPhone: Yup.string().required("Restaurant phone is required"),
    yourName: Yup.string().required("Your name is required"),
    yourEmail: Yup.string().email("Invalid email address").required("Your email is required"),
    yourPhone: Yup.string().required("Your phone is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });


  //function to handle final form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setCurrentStep(4); //after submission show success step
  };

  //function to handle step navigation with partial validation
  const handleNext = async (fields) => {
    const valid = await trigger(fields);
    if (valid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`step ${currentStep >= step ? "active" : ""} ${currentStep === 4 ? "completed" : ""}`}
        >
          {currentStep === 4 ? "✓" : currentStep > step ? "✓" : step}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="restaurant-register">
      <div className="register-container">
        <div className="register-right">
          {renderStepIndicator()}

          <div className="form-section">
            {currentStep === 1 && (
              <>
                <h2 className="form-title">Tell us about your restaurant</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleNext(["restaurantName","restaurantAddress","restaurantPhone"]); }}>
                  <div className="form-group">
                    <label htmlFor="restaurantName">Restaurant name <span className="required">*</span></label>
                    <input type="text" id="restaurantName" {...register("restaurantName")} />
                    <p className="error">{errors.restaurantName?.message}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="restaurantAddress">Restaurant address <span className="required">*</span></label>
                    <input type="text" id="restaurantAddress" {...register("restaurantAddress")} />
                    <p className="error">{errors.restaurantAddress?.message}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="restaurantPhone">Restaurant phone <span className="required">*</span></label>
                    <div className="phone-input">
                      <select className="country-code">
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+962">🇯🇴 +962</option>
                      </select>
                      <input type="tel" id="restaurantPhone" {...register("restaurantPhone")} />
                    </div>
                    <p className="error">{errors.restaurantPhone?.message}</p>
                  </div>
                  <button type="submit" className="next-btn">Next</button>
                </form>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h2 className="form-title">Tell us about yourself</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleNext(["yourName","yourEmail","yourPhone"]); }}>
                  <div className="form-group">
                    <label htmlFor="yourName">Your name <span className="required">*</span></label>
                    <input type="text" id="yourName" {...register("yourName")} />
                    <p className="error">{errors.yourName?.message}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="yourEmail">Your email <span className="required">*</span></label>
                    <input type="email" id="yourEmail" {...register("yourEmail")} />
                    <p className="error">{errors.yourEmail?.message}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="yourPhone">Your phone <span className="required">*</span></label>
                    <div className="phone-input">
                      <select className="country-code">
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+962">🇯🇴 +962</option>
                      </select>
                      <input type="tel" id="yourPhone" {...register("yourPhone")} />
                    </div>
                    <p className="error">{errors.yourPhone?.message}</p>
                  </div>
                  <button type="submit" className="next-btn">Next</button>
                </form>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h2 className="form-title">Set your password</h2>
                {/* هون بنستخدم handleSubmit(onSubmit) */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input type="password" id="password" {...register("password")} />
                    <p className="error">{errors.password?.message}</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm password <span className="required">*</span></label>
                    <input type="password" id="confirmPassword" {...register("confirmPassword")} />
                    <p className="error">{errors.confirmPassword?.message}</p>
                  </div>
                  <button type="submit" className="next-btn register-btn">Register</button>
                </form>
              </>
            )}

            {currentStep === 4 && (
              <div className="success-section">
                <h2 className="success-title">Congratulation!</h2>
                <h3 className="success-subtitle">Your account has created successfully!</h3>
                <h4 className="get-started-title">Get your restaurant started</h4>
                <div className="verification-message">
                  <p>A verification code has been sent to your email.</p>
                  <p>Please verify your account via email. <a href="#" className="open-email-link">Open my email</a></p>
                </div>
                {/* <button className="get-started-btn" onClick={() => navigate("/restaurant/1/menu")}>Get Started</button> */}
              </div>
            )}
          </div>
        </div>

        <div className="register-left">
          <div className="logo-section">
            <img src="/images/Group (2).png" alt="Termbi" className="logo" />
            <p className="description">Restaurants Management System</p>
            <img src="/images/illustration.png" alt="Illustration" className="illustration" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
