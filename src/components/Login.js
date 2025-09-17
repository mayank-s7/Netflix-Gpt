import { useState } from "react";
import React from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-full absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute bg-black/80 p-12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-3xl font-bold text-white mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2.5 m-2.5 w-full text-white bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-2.5 m-2.5 w-full text-white bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2.5 m-2.5 w-full text-white bg-gray-700"
        />

        <button className="w-full p-2.5 m-2.5 bg-red-700 font-bold  text-white rounded-md">
          Sign In
        </button>
        <p className="text-white mt-4" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span className="text-white font-bold hover:underline cursor-pointer">
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
