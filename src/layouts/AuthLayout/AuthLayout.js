import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Forgot from "../../components/Forgot/Forgot";

const AuthLayout = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [forgot, setForgot] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
    setForgot(false);
  };

  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
    setForgot(false);
  };

  const handleForgot = () => {
    setLogin(false);
    setRegister(false);
    setForgot(true);
  };

  return (
    <div>
      <Header />
      {login && <Login />}
      {register && <Register />}
      {forgot && <Forgot />}
      <button
        cursor="pointer"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={login ? handleRegister : handleLogin}
      >
        {login ? "Don’t have an account yet? Sign up" : "Sign In Now"}
      </button>

      <button
        class="w-full text-white bg-blue-700 hover:bg-blue-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={forgot ? handleRegister : handleForgot}
      >
        {forgot ? "Sign Up Now" : "Forgot Password?"}
      </button>
      <Footer />
    </div>
  );
};

export default AuthLayout;
