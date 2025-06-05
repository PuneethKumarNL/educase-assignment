import { Camera, UserCircle2 } from "lucide-react";

const AccountSettingsScreen = ({ userData, handleLogout }) => (
  <div className="p-6 bg-white h-full flex flex-col">
    <h1 className="text-xl font-bold text-black mb-8 mt-4">Account Settings</h1>
    <div className="flex items-center mb-6">
      <div className="relative mr-4">
        {userData.profilePic ? (
          <img
            src={userData.profilePic}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <UserCircle2 size={80} className="text-gray-400" />
        )}
        <button className="absolute bottom-0 right-0 bg-[#6001D3] p-1.5 rounded-full hover:bg-purple-800">
          <Camera size={16} className="text-white" />
        </button>
      </div>
      <div>
        <p className="text-lg font-semibold text-black">{userData.fullName}</p>
        <p className="text-sm text-[#A0A0A0]">{userData.email}</p>
      </div>
    </div>
    <p className="text-sm text-[#A0A0A0] mb-6 leading-relaxed">
      Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
      Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      Voluptua.
    </p>
    <hr className="border-t border-dashed border-gray-300 my-4" />
    <div className="mt-auto">
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white py-3 rounded-md text-lg font-medium hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  </div>
);

export default AccountSettingsScreen;
