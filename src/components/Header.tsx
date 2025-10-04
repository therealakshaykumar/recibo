import { Bell, CircleUserRound, Menu, Target, X } from "lucide-react";
import { useState } from "react";
import useAuthStore from "../store/authStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const closeSidebar = () => setIsOpen(false);
  const signOut = useAuthStore((state) => state.logOut);

  return (
    <>
      <header className="flex items-center justify-between px-4 sm:px-6 md:px-14 recibo-bg text-white h-16">
        <div className="flex items-center gap-2 sm:gap-3">
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer sm:size-6 size-5"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 justify-center">
          <Bell className="size-6 sm:size-7 md:size-8 cursor-pointer" />
          <p className="text-lg sm:text-xl md:text-2xl">Recibo</p>
          <CircleUserRound
            onClick={() => setShowProfileCard(!showProfileCard)}
            className="size-6 sm:size-7 md:size-8 cursor-pointer"
          />
        </div>
      </header>

      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <div
        className={`sidebar ${isOpen ? "open" : ""} w-64 sm:w-72 max-w-[80%]`}
      >
        <div className="flex items-center justify-between px-5">
          <h2 className="p-4 font-bold text-lg">Menu</h2>
          <X className="size-5 cursor-pointer" onClick={closeSidebar} />
        </div>
      </div>

      <div
        className={`profile-card fixed right-0 top-16 bg-white rounded md:rounded-lg px-6 py-6 drop-shadow-2xl flex flex-col gap-5 w-[90%] sm:w-80 md:w-96 transition-transform duration-500 ${
          showProfileCard ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg sm:text-xl font-semibold">Recibo</p>
            <p className="text-gray-600 text-sm">ak@gmail.com</p>
          </div>
          <X
            onClick={() => setShowProfileCard(false)}
            className="recibo-bg text-white rounded cursor-pointer size-5 sm:size-6"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 text-white">
          <button className="btn w-full sm:w-auto">Change Password</button>
          <button onClick={() => signOut()} className="btn w-full sm:w-auto">
            Sign Out
          </button>
        </div>

        <div className="flex items-center gap-2 cursor-pointer text-gray-600">
          <Target className="size-5" />
          Login Activity
        </div>
      </div>
    </>
  );
};

export default Header;
