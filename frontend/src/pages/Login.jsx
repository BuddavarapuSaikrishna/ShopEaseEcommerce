import { useState } from "react";

import AuthHeader from "../components/auth/AuthHeader";
import LoginForm from "../components/auth/LoginForm";
import AuthFooter from "../components/auth/AuthFooter";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setEmail("");
    setPassword("");

    // Backend authentication will be added later.
    console.log("Login form validated", {
      email: email.trim(),
      rememberMe,
    });
  };

  const handleForgotPassword = () => {
    setError("Password recovery will be available soon.");
  };

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F1EC] px-4 py-10">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-stone-300/50 blur-3xl"
      />

      {/* Login card */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/80 bg-white/95 px-6 py-8 shadow-xl shadow-stone-900/10 sm:px-10 sm:py-10">
        <AuthHeader
          title="Your style awaits."
          subtitle="Sign in to discover your next favourite look."
        />

        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          error={error}
          handleLogin={handleLogin}
          handleForgotPassword={handleForgotPassword}
        />

        <AuthFooter
          message="New to ShopEase?"
          linkText="Create an account"
          linkTo="/register"
        />
      </div>
    </main>
  );
}

export default Login;
