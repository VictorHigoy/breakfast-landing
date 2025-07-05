import { useState } from "react";
import LightTheBeacon from "./LightTheBeacon";
export default function Navbar() {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className="absolute inset-x-0 flex items-center justify-between lg:px-5">
      <img
        className="aspect-[10/10] h-[90px] w-[90px] object-contain md:h-[130px] md:w-[130px]"
        src="/Logo/SecondBreakfast.png"
        alt="Logo"
      />
      <div className="z-40 hidden bg-[#1F1F1F] lg:block lg:rounded-full lg:px-10 lg:py-5">
        <ul className="flex items-center gap-5 text-white lg:gap-10 lg:font-semibold">
          <li>
            <a
              href="#our-products"
              className="cursor-pointer hover:text-[#FFA100]"
            >
              Our Products
            </a>
          </li>
          <li className="cursor-pointer hover:text-[#FFA100]">About Us</li>
          <li>
            <button
              onClick={() => setShowForm(true)}
              className="cursor-pointer text-[#FFA100]"
            >
              Light the Beacons
            </button>
          </li>
        </ul>
      </div>
      <div />
      <LightTheBeacon setShowForm={setShowForm} showForm={showForm} />
    </div>
  );
}
