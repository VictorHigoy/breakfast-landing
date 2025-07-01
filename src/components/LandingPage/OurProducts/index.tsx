export default function OurProducts() {
  return (
    <div className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_150%_105%_at_top,_#0B0B17_55%,_#875FFE_70%,_#E6F380_80%,_#EEEFF3_90%)] px-5 pt-10 pb-10 md:pb-20">
      <h1 className="text-[45.05px] font-black text-white md:text-[97.38px]">
        Our Product
      </h1>
      <div className="relative flex flex-col items-center justify-center lg:flex-row">
        <img
          src="/LandingPage/Products/crystal-ball-with-coins.gif"
          className="relative z-10 h-full max-h-[620px] w-full max-w-[670px] object-contain"
          alt="Description"
        />
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

        <img
          src="/LandingPage/Products/futr-web-animation.gif"
          className="z-20 h-full max-h-[627px] w-full max-w-[620px] object-contain"
          alt="Description"
        />
      </div>
    </div>
  );
}
