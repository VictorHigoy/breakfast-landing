import { useState } from "react";
import { Menu, X } from "lucide-react";
import LightTheBeacon from "../LightTheBeacon";

export default function UpperRightBox() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className="absolute top-0 right-0 z-50">
      {/* Toggle Icon Box */}
      <div className="bg-primary-bg relative h-[60px] w-[50px] rounded-bl-2xl lg:h-[100px] lg:w-[100px] lg:rounded-bl-4xl">
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="text-white" />
        </div>

        {/* Decorative corners */}
        <div className="bg-primary-bg absolute top-0 right-full">
          <div className="bg-yellow-bg h-[50px] w-[50px] rounded-tr-2xl lg:rounded-tr-4xl" />
        </div>
        <div className="bg-primary-bg absolute top-full right-0">
          <div className="bg-yellow-bg h-[50px] w-[50px] rounded-tr-2xl lg:rounded-tr-4xl" />
        </div>
      </div>

      {/* Fullscreen Animated Menu */}
      <div
        className={`bg-primary-bg fixed top-0 right-0 h-full w-full transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <X className="h-10 w-10 rounded-full p-2 text-white hover:bg-gray-800" />
          </button>
        </div>
        <ul className="mt-10 flex w-full flex-col items-center gap-1 text-lg font-semibold text-white">
          <li className="flex w-full">
            <a
              onClick={() => setMenuOpen(false)}
              href="#our-products"
              className="hover:text-primary cursor-pointertext-center w-full cursor-pointer py-4 text-center hover:bg-white/5 hover:text-[#FFA100]"
            >
              Our Products
            </a>
          </li>
          <li className="flex w-full">
            <a
              onClick={() => setMenuOpen(false)}
              href="#our-products"
              className="hover:text-primary cursor-pointertext-center w-full cursor-pointer py-4 text-center hover:bg-white/5 hover:text-[#FFA100]"
            >
              About Us
            </a>
          </li>
          <li className="w-full">
            <button
              onClick={() => {
                setShowForm(true);
                setMenuOpen(false);
              }}
              className="hover:text-primary w-full cursor-pointer py-4 text-center text-[#FFA100] hover:bg-white/5"
            >
              Light the Beacons
            </button>
          </li>
        </ul>
      </div>
      <LightTheBeacon setShowForm={setShowForm} showForm={showForm} />
    </div>
  );
}
