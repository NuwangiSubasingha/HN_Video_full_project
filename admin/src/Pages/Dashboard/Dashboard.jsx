import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-[#DEF2F1] py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#2B7A78] mb-10 drop-shadow-md">
          Welcome to Your Dashboard
        </h1>

        {/* User greeting */}
        <div className="text-center text-[#17252A] text-lg mb-10">
          Hello <span className="font-semibold text-[#3AAFA9]">{user?.name || "User"}</span>, explore your dashboard and manage your actions here.
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Profile */}
          <div className="bg-[#FEFFFF] p-6 rounded-2xl shadow-lg border border-[#3AAFA9]/20 hover:scale-[1.02] transition-transform duration-200 relative">
            <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">Pending</span>
            <h2 className="text-xl font-semibold text-[#2B7A78] mb-2">Your Profile</h2>
            <p className="text-[#17252A] text-sm mb-4">View and update your profile information securely.</p>
            <button className="bg-[#3AAFA9] text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-50">
              Coming Soon
            </button>
          </div>

          {/* Card 2 - Stats */}
          <div className="bg-[#FEFFFF] p-6 rounded-2xl shadow-lg border border-[#3AAFA9]/20 hover:scale-[1.02] transition-transform duration-200 relative">
            <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">Pending</span>
            <h2 className="text-xl font-semibold text-[#2B7A78] mb-2">Statistics</h2>
            <p className="text-[#17252A] text-sm mb-4">Check your usage, activities, and performance metrics.</p>
            <button className="bg-[#3AAFA9] text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-50">
              Coming Soon
            </button>
          </div>

          {/* Card 3 - Quick Actions */}
          <div className="bg-[#FEFFFF] p-6 rounded-2xl shadow-lg border border-[#3AAFA9]/20 hover:scale-[1.02] transition-transform duration-200 relative">
            <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">Pending</span>
            <h2 className="text-xl font-semibold text-[#2B7A78] mb-2">Quick Actions</h2>
            <p className="text-[#17252A] text-sm mb-4">Perform common tasks like adding packages or booking seats.</p>
            <button className="bg-[#3AAFA9] text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-50">
              Coming Soon
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-[#3AAFA9]">
          © {new Date().getFullYear()} HN Videography System · All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
