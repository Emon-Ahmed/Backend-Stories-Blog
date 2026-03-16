import React from "react";

export default function AuthInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm md:text-base font-medium text-[#111111] "
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-[#FAFBFC] px-4 py-2 text-sm md:text-base text-[#111111] outline-none transition ${
          error
            ? "border-red-300 focus:border-red-400"
            : "border-[#111111]/10 focus:border-[#444BFF]"
        }`}
      />
      {error ? <p className=" text-sm text-red-500">{error}</p> : null}
    </div>
  );
}
