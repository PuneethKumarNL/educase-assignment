import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const LoginScreen = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormFilled = email && password;

  return (
    <div className="p-6 bg-white h-full flex flex-col">
      <h1 className="text-2xl font-bold text-black mt-4 mb-1">
        Signin to your
      </h1>
      <h1 className="text-2xl font-bold text-black mb-3">PopX account</h1>
      <p className="text-gray-500 text-base mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <InputWithLabel
        id="emailLogin"
        label="Email Address"
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        labelColor="text-[#9B51E0]"
      />
      <InputWithLabel
        id="passwordLogin"
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        labelColor="text-[#9B51E0]"
      />

      <div className="mt-auto">
        <button
          onClick={() => handleLogin(email, password)}
          className={`w-full py-3 rounded-md text-lg font-medium transition-colors ${
            isFormFilled
              ? "bg-[#6C2BD9] text-white hover:bg-purple-700"
              : "bg-[#CBCBCB] text-white cursor-not-allowed"
          }`}
          disabled={!isFormFilled}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
