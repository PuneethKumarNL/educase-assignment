import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const SignUpScreen = ({ handleSignUp }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "no",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.fullName && formData.phone && formData.email && formData.password;

  return (
    <div className="p-6 bg-white h-full flex flex-col">
      <h1 className="text-2xl font-bold text-black mt-4 mb-1">Create your</h1>
      <h1 className="text-2xl font-bold text-black mb-6">PopX account</h1>

      <InputWithLabel
        id="fullName"
        label="Full Name"
        placeholder="Marry Doe"
        value={formData.fullName}
        onChange={handleChange}
        labelColor="text-[#9B51E0]"
      />
      <InputWithLabel
        id="phone"
        label="Phone number"
        type="tel"
        placeholder="9876543210"
        value={formData.phone}
        onChange={handleChange}
        labelColor="text-[#9B51E0]"
      />
      <InputWithLabel
        id="email"
        label="Email address"
        type="email"
        placeholder="marry@example.com"
        value={formData.email}
        onChange={handleChange}
        labelColor="text-[#9B51E0]"
      />
      <InputWithLabel
        id="password"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        labelColor="text-[#9B51E0]"
      />
      <InputWithLabel
        id="companyName"
        label="Company name"
        placeholder="PopX Technologies"
        value={formData.companyName}
        onChange={handleChange}
        isOptional={true}
        labelColor="text-[#9B51E0]"
      />

      <div className="mb-6">
        <p className="text-sm text-gray-700 mb-2">
          Are you an Agency?<span className="text-red-500">*</span>
        </p>
        <div className="flex items-center">
          <input
            type="radio"
            id="agencyYes"
            name="isAgency"
            value="yes"
            checked={formData.isAgency === "yes"}
            onChange={handleChange}
            className="mr-2 accent-purple-600"
          />
          <label htmlFor="agencyYes" className="mr-4 text-sm text-gray-700">
            Yes
          </label>
          <input
            type="radio"
            id="agencyNo"
            name="isAgency"
            value="no"
            checked={formData.isAgency === "no"}
            onChange={handleChange}
            className="mr-2 accent-purple-600"
          />
          <label htmlFor="agencyNo" className="text-sm text-gray-700">
            No
          </label>
        </div>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => {
            if (isFormValid) {
              handleSignUp(formData);
            }
          }}
          className={`w-full py-3 rounded-md text-lg font-medium transition-colors ${
            isFormValid
              ? "bg-[#6C2BD9] text-white hover:bg-purple-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignUpScreen;
