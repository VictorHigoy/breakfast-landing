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
          className="relative z-20 mx-7 h-full w-full max-w-[794px] overflow-hidden rounded-xl bg-[#0B0B17] px-7 py-7"
        >
          <div className="mb-10 max-w-[660px]">
            <h1 className="mt-8 mb-3 text-[26.14px] font-black text-white md:mt-0 md:text-[47px]">
              Hurry! Light the Beacon!
            </h1>
            <p className="text-[8.64px] text-white md:text-[15.6px]">
              Have questions about how Futr works, want to report an issue, or
              simply want to share your ideas for improving the future of event
              prediction and social interaction?
            </p>
          </div>
          <X
            size={35}
            onClick={() => setShowForm(false)}
            className="absolute top-1 right-1 z-20 cursor-pointer rounded-full p-1 text-white hover:bg-white/10"
          />
          <div className="relative z-10 flex">
            <div className="flex flex-1 flex-col gap-3 md:max-w-[307px]">
              <input
                type="text"
                className="w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-[13px] font-normal text-white placeholder-white/40 focus:border-[#875FFE] focus:outline-none"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-[13px] font-normal text-white placeholder-white/40 focus:border-[#875FFE] focus:outline-none"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-[13px] font-normal text-white placeholder-white/40 focus:border-[#875FFE] focus:outline-none"
                placeholder="Subject"
              />
              <textarea
                rows={5}
                className="w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-[13px] font-normal text-white placeholder-white/40 focus:border-[#875FFE] focus:outline-none"
                placeholder="Message"
              />
            </div>

            <div className="relative z-10 mt-5 -mr-20 hidden h-full w-full flex-1 items-center justify-center md:flex">
              <img
                width={177}
                height={100}
                src="/LandingPage/LightTheBeacon/Ring.png"
                alt="ring"
                className="relative z-20"
              />
            </div>
          </div>
          <div className="relative z-20 mt-5 flex w-full flex-col justify-center md:flex-row md:items-end md:justify-between">
            <button className="mb-10 w-full cursor-pointer rounded-lg border border-white py-2 text-center text-[13px] font-bold text-white transition-all hover:border-[#875FFE] hover:bg-[#875FFE] md:mb-0 md:max-w-[307px]">
              Confirm
            </button>
            <div className="z-10 flex flex-col items-center justify-center gap-3 md:flex-row">
              <h2 className="text-[19.48px] font-medium text-white md:text-[23px]">
                Follow Us
              </h2>
              <div className="flex gap-4">
                <img
                  src="/LandingPage/LightTheBeacon/Twitter.png"
                  alt="ring"
                  className="h-[18.25px] w-[20.72px] md:h-[31px] md:w-[35px]"
                />
                <img
                  src="/LandingPage/LightTheBeacon/Discord.png"
                  alt="ring"
                  className="block h-[18.58px] w-[24.07px] md:hidden"
                />
              </div>
              <img
                src="/LandingPage/LightTheBeacon/Discord.png"
                alt="ring"
                className="hidden h-[31px] w-[40px] md:block"
              />
            </div>
          </div>
          <div className="absolute top-32 right-0 z-0 h-full w-full md:top-0 md:-right-10">
            <svg
              width="551"
              height="565"
              viewBox="0 0 551 565"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-0 h-full min-h-[565] w-full min-w-[551] blur-3xl md:blur-md"
            >
              <g filter="url(#filter0_f_33747_63084)">
                <circle cx="461.5" cy="335.5" r="174.5" fill="#DA9C28" />
              </g>
              <defs>
                <filter
                  id="filter0_f_33747_63084"
                  x="0.899994"
                  y="-125.1"
                  width="921.2"
                  height="921.2"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="143.05"
                    result="effect1_foregroundBlur_33747_63084"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
