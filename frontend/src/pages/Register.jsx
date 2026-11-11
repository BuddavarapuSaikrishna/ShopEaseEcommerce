import { useState } from "react";

import AuthHeader from "../components/auth/AuthHeader";
import AuthFooter from "../components/auth/AuthFooter";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Backend registration will be added later.
    setSuccess("Form validated! Registration backend is not connected yet.");
  };

  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F1EC] px-4 py-10">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-stone-300/50 blur-3xl"
      />

      {/* Register Card */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/80 bg-white/95 px-6 py-8 shadow-xl shadow-stone-900/10 sm:px-10 sm:py-10">
        <AuthHeader
          title="Join the world of style."
          subtitle="Create your ShopEase account and discover your next favourite look."
        />

        <RegisterForm
          formData={formData}
          handleChange={handleChange}
          handleRegister={handleRegister}
          error={error}
        />

        {success && (
          <p role="status" className="mt-4 text-center text-sm text-green-700">
            {success}
          </p>
        )}

        <AuthFooter
          message="Already have an account?"
          linkText="Sign in"
          linkTo="/login"
        />
      </div>
    </main>
  );
}

export default Register;
