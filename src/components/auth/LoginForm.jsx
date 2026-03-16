import React, { useState } from "react";
import { Link } from "react-router";
import AuthInput from "./AuthInput";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      nextErrors.password = "Password is required";
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <div className="w-full max-w-xl px-6 md:px-10 font-apercu">
      <div className="text-4xl md:text-4xl font-bold text-[#111111]">
        Welcome Back
      </div>
      <div className="mt-4 text-base md:text-xl text-[#111111]/60">
        Please enter your email and password to connect with your account.
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <AuthInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          error={errors.email}
        />

        <AuthInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          error={errors.password}
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#444BFF] px-6 py-2 text-base font-medium text-white cursor-pointer"
        >
          Log In
        </button>
      </form>

      {submitted ? (
        <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Login form is ready. Connect this submit handler to your auth API
          next.
        </div>
      ) : null}

      <div className="mt-8 text-sm md:text-base text-[#111111]/60">
        Don&apos;t have an account?{" "}
        <Link to="/auth/signup" className="text-[#444BFF] font-medium">
          Sign up
        </Link>
      </div>
    </div>
  );
}
