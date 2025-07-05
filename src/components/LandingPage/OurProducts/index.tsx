import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OurProducts() {
  const [showSvg, setShowSvg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSvg(true);
    }, 300); // Delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="our-products"
      className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_150%_105%_at_top,_#0B0B17_55%,_#875FFE_70%,_#E6F380_80%,_#EEEFF3_90%)] px-5 pt-10 pb-10 md:pb-20"
    >
      <h1 className="relative text-[45.05px] font-black text-white md:text-[97.38px]">
        Our Product(s)
        <p className="absolute -top-2 right-0 text-[10px] text-[#FFD966] sm:top-0 md:text-[19.23px]">
          We're still cooking. More coming soon ;)
        </p>
      </h1>
      <div className="relative flex flex-col items-center justify-center lg:flex-row">
        <img
          src="/LandingPage/Products/crystal-ball-with-coins.gif"
          className="relative z-10 hidden h-full max-h-[620px] w-full max-w-[670px] object-contain md:block"
          alt="Description"
        />
        {showSvg && (
          <svg
            width="986"
            height="903"
            viewBox="0 0 986 903"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-40 left-0 z-0 hidden lg:block"
          >
            <path
              d="M232.357 624.177L815.432 732.137L538.908 208.311L152.317 531.831C152.317 531.831 109.222 546.179 146.401 588.077C183.581 629.978 232.357 624.177 232.357 624.177Z"
              fill="url(#paint0_linear_33969_973)"
            />
            <path
              d="M235.598 619.033L780.412 698.661L786.949 641.25L249.626 606.455C249.626 606.455 209.601 612.71 203.827 618.345C198.053 623.984 235.588 619.022 235.588 619.022L235.598 619.033Z"
              fill="url(#paint1_linear_33969_973)"
            />
            <path
              d="M236.171 538.596L583.734 249.461L474.246 266.946L224.918 537.18C224.918 537.18 193.753 552.821 199.376 553.234C204.99 553.635 236.16 538.6 236.16 538.6L236.171 538.596Z"
              fill="url(#paint2_linear_33969_973)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_33969_973"
                x1="190.965"
                y1="521.622"
                x2="540.384"
                y2="330.607"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#875FFE" />
                <stop offset="1" stop-color="#875FFE" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_33969_973"
                x1="204.1"
                y1="610.757"
                x2="779.575"
                y2="699.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#875FFE" />
                <stop offset="1" stop-color="#875FFE" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_33969_973"
                x1="204.228"
                y1="498.531"
                x2="546.291"
                y2="307.495"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#875FFE" />
                <stop offset="1" stop-color="#875FFE" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        )}
        <img
          src="/LandingPage/Products/futr-web-animation.gif"
          className="z-20 h-full max-h-[627px] w-full max-w-[620px] object-contain"
          alt="Description"
        />
      </div>
      <motion.div
        animate={{
          y: [0, -20, 0], // up, then down
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0,
        }}
        className="z-30 mt-10 flex w-full max-w-[952px] flex-col items-center gap-7 rounded-3xl border border-white bg-[#0B0B17] p-5 md:mt-20"
      >
        <div>
          <div className="mb-3 flex items-center justify-center">
            <img
              className="h-[80px] w-[80px]"
              src="/Logo/FUTR_LOGO_LOOP.gif"
              alt="Futr Logo"
            />
            <h1 className="text-[48px] font-black text-white">
              Futr<span className="text-[#875FFE]">.</span>
            </h1>
          </div>
          <p className="max-w-[818px] text-center text-[17.65px] font-light tracking-[-0.71px] text-white">
            Futr is a social prediction platform where anyone can turn opinions
            into outcomes. Users predict real-world events , from sports to pop
            culture and get rewarded for being right. It’s like Twitter meets
            Polymarket, built for everyday people. No jargon, just simple
            yes-or-no predictions powered by stable digital money.
          </p>
        </div>
        <div className="mb-2 flex w-fit flex-col gap-3 md:flex-row">
          <Link
            target="_blank"
            to={"https://futr-beta.mobii.ph/"}
            className="group flex items-center gap-5 rounded-lg border border-[#875FFE] px-4 py-2 transition-all hover:border-white hover:bg-white"
          >
            <p className="text-[17.35px] font-bold text-white transition-all group-hover:text-black">
              Visit Futr.
            </p>
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.08594 17.1149L14.7584 7.3125"
                stroke="#875FFE"
                stroke-width="1.7345"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.08594 7.3125H14.7584V17.1149"
                stroke="#875FFE"
                stroke-width="1.7345"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link
            target="_blank"
            to={"https://futr-beta.mobii.ph/"}
            className="group flex items-center gap-5 rounded-lg border border-white px-4 py-2 transition-all hover:bg-white"
          >
            <p className="text-[17.35px] font-bold text-white transition-all group-hover:text-black">
              Launch App
            </p>
            <svg
              width="21"
              height="24"
              viewBox="0 0 21 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white group-hover:text-[#875FFE]"
            >
              <path
                d="M6.08594 17.1149L14.7584 7.3125"
                stroke="currentColor"
                stroke-width="1.7345"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.08594 7.3125H14.7584V17.1149"
                stroke="currentColor"
                stroke-width="1.7345"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
