import React from "react";
import backgroundImage from "../assets/authbg.png";
import logoImage1 from "../assets/logo1.png";
import logoImage2 from "../assets/logo2.png";
import logoImage3 from "../assets/logo3.png";
import heroImg from "../assets/heroImg.png";
import star from "../assets/star.png";
import Signup from "../components/Signup";
import { useLocation, Link } from "react-router-dom";
import SignIn from "../components/SignIn";

// Define custom gradient class for the heading text (Optional: move this to global CSS or extend tailwind.config)
const textGradientClass =
  "bg-clip-text text-transparent bg-gradient-to-r from-[#1E1A4D] to-[#372AAC]";

const AuthPage = () => {
  const location = useLocation();

  // check if current route includes 'signup'
  const isSignup = location.pathname.includes("signup");
  return (
    // Main Container - Full viewport, background image as a utility
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-auto md:overflow-hidden p-6 md:p-10 lg:p-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* 1. Logos Section - Positioned relative to the main container's padding */}
      <div className="flex items-center space-x-1 mb-8 md:mb-16">
        {/* Logo Icons Group */}
        <div className="flex items-center">
          {/* Use flex-shrink-0 to prevent logos from shrinking */}
          <img
            src={logoImage3}
            alt="Logo 3"
            className="w-5 h-5 flex-shrink-0"
          />
          <img
            src={logoImage2}
            alt="Logo 2"
            className="w-5 h-5 flex-shrink-0 -ml-1"
          />{" "}
          {/* Slight overlap if needed */}
        </div>
        {/* Main Logo Text/Image */}
        <img src={logoImage1} alt="pingup logo" className="h-6 md:h-8" />
      </div>

      {/* 2. Main Content Layout - Flex container for Hero (left) and Auth Form (right) */}
      {/* md:justify-around for space on larger screens, items-start for top alignment */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-12 lg:space-y-0">
        {/* 2A. Hero Part - Left side */}
        <div className="lg:w-1/2 flex flex-col space-y-4 md:space-y-6">
          {/* Top Info - Hero Image + Stars/Text */}
          <div className="flex items-center space-x-4">
            {/* Hero Image */}
            <img
              src={heroImg}
              alt="heroImg"
              className="w-16 h-8 md:w-24 md:h-10 flex-shrink-0"
            />
            {/* Stars and Developer Count */}
            <div className="flex flex-col space-y-0.5">
              <div className="flex space-x-0.5">
                <img
                  src={star}
                  alt="star rating"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                <img
                  src={star}
                  alt="star rating"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                <img
                  src={star}
                  alt="star rating"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                <img
                  src={star}
                  alt="star rating"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                <img
                  src={star}
                  alt="star rating"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
              </div>
              <p className="font-outfit text-sm md:text-base font-medium leading-normal text-[#1C398E]">
                Used by 12k+ developers
              </p>
            </div>
          </div>

          {/* Main Heading (H1) */}
          <h1
            className={`font-outfit font-bold text-3xl leading-snug md:text-6xl md:leading-[1.1] ${textGradientClass}`}
          >
            More than just friends truly connect
          </h1>

          {/* Subheading (H2) */}
          <h2 className="font-outfit font-normal text-lg leading-normal md:text-3xl md:leading-snug text-[#312C85]">
            connect with global community on pingup.
          </h2>
        </div>

        {/* 2B. Auth Forms Part - Right side */}
        {/* Shadow and rounded corners are good additions for a form box */}
        <div className="w-full max-w-sm md:max-w-md lg:w-[400px] p-6 md:p-10 bg-white rounded-xl shadow-2xl mx-auto lg:mx-0">
          {isSignup ? <Signup /> : <SignIn />}

          {/* Switch link below the form */}
          <p className="text-center text-sm mt-6 text-gray-600">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600 font-medium">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <Link to="/signup" className="text-blue-600 font-medium">
                  Sign up
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
