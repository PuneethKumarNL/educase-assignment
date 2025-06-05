import { Link } from "react-router-dom";

const WelcomeScreen = () => (
  <div className="flex flex-col justify-end h-full p-6 pb-10 bg-white">
    <h1 className="text-3xl font-bold text-black mb-2">Welcome to PopX</h1>
    <p className="text-gray-500 text-lg mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    </p>
    <Link
      to="/signup"
      className="w-full text-center bg-[#6C2BD9] text-white py-3 rounded-md text-lg font-medium mb-3 hover:bg-purple-700 transition-colors"
    >
      Create Account
    </Link>
    <Link
      to="/login"
      className="w-full text-center bg-[#F0E9FF] text-[#6C2BD9] py-3 rounded-md text-lg font-medium hover:bg-purple-200 transition-colors"
    >
      Already Registered? Login
    </Link>
  </div>
);

export default WelcomeScreen;
