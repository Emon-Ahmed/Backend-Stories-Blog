import React, { useState } from "react";
import { Link } from "react-router";
import AuthInput from "./AuthInput";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      nextErrors.password = "Password is required";
    }

    if (!formData.confirmPassword.trim()) {
      nextErrors.confirmPassword = "Please retype your password";
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <div className="w-full max-w-xl px-6 md:px-10 font-apercu">
      <div className="text-4xl md:text-4xl font-bold text-[#111111]">
        Create Account
      </div>
      <div className="mt-4 text-base md:text-xl text-[#111111]/60">
        Start your backend journey with a clean account setup.
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <AuthInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          error={errors.fullName}
        />

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
          placeholder="Create a password"
          error={errors.password}
        />

        <AuthInput
          label="Retype Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Retype your password"
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#444BFF] px-6 py-2 text-base font-medium text-white cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      {submitted ? (
        <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Signup form is ready. Connect this submit handler to your auth API
          next.
        </div>
      ) : null}

      <div className="mt-8 text-sm md:text-base text-[#111111]/60">
        Already have an account?{" "}
        <Link to="/auth" className="font-medium text-[#444BFF]">
          Log in
        </Link>
      </div>
    </div>
  );
}
