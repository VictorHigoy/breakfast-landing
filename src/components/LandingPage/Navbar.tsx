import { useState } from "react";
import CustomModal from "../Modal/CustomModal";
import { X } from "lucide-react";
export default function Navbar() {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className="absolute inset-x-0 flex items-center justify-between lg:px-5">
      <img
        className="aspect-[10/10] h-[70px] w-[70px] object-contain md:h-[130px] md:w-[130px]"
        src="/Logo/SecondBreakfast.png"
        alt="Logo"
      />
      <div className="z-40 hidden bg-[#1F1F1F] lg:block lg:rounded-full lg:px-10 lg:py-5">
        <ul className="flex items-center gap-5 text-white lg:gap-10 lg:font-semibold">
          <li>
            <a href="#our-products" className="cursor-pointer">
              Our Products
            </a>
          </li>
          <li>About us</li>
          <li>
            <button onClick={() => setShowForm(true)} className="">
              Light the Beacons
            </button>
          </li>
        </ul>
      </div>
      <div />
      <CustomModal onClose={() => setShowForm(false)} open={showForm}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative h-full w-full max-w-[794px] rounded-xl bg-[#0B0B17] px-7 py-7"
        >
          <div className="max-w-[660px]">
            <h1 className="mb-3 text-[47px] font-black text-white">
              Hurry! Light the Beacon!
            </h1>
            <p className="text-[15.6px] text-white">
              Have questions about how Futr works, want to report an issue, or
              simply want to share your ideas for improving the future of event
              prediction and social interaction?
            </p>
          </div>
          <X
            size={35}
            onClick={() => setShowForm(false)}
            className="absolute top-1 right-1 cursor-pointer rounded-full p-1 text-white hover:bg-white/10"
          />
        </div>
      </CustomModal>
    </div>
  );
}
