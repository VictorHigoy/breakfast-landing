import React, { useRef, useState } from "react";
import CustomModal from "../../Modal/CustomModal";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function LightTheBeacon({
  setShowForm,
  showForm,
}: {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const form = useRef<HTMLFormElement>(null);

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(false);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm("service_7pdbrxo", "template_4xxxbbf", form.current, {
        publicKey: "AUsqL1R7PRA1H_8GV",
      })
      .then(
        () => {
          setError(false);
          setShowForm(false);
          setIsSuccess(true);
          console.log("success");
        },
        (error) => {
          setIsSuccess(true);
          setError(true);
          console.log("error");
        },
      );
  };

  return (
    <>
      <CustomModal onClose={() => setShowForm(false)} open={showForm}>
        <form
          ref={form}
          onSubmit={sendEmail}
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
                required
                type="text"
                name="full_name"
                className="w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-[13px] font-normal text-white placeholder-white/40 focus:border-[#875FFE] focus:outline-none"
                placeholder="Full Name"
              />
              <input
                required
                type="email"
                name="from_name"
                className="w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-[13px] font-normal text-white placeholder-white/40 focus:border-[#875FFE] focus:outline-none"
                placeholder="Email"
              />
              <input
                required
                type="text"
                name="subject"
                className="w-full border-0 border-b border-white/40 bg-transparent px-3 py-3 text-[13px] font-normal text-white placeholder-white/40 focus:border-[#875FFE] focus:outline-none"
                placeholder="Subject"
              />
              <textarea
                required
                rows={5}
                name="message"
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
          <div className="relative z-20 mt-5 flex w-full flex-col items-center justify-center md:mt-0 md:flex-row md:items-center md:justify-between">
            <button
              type="submit"
              className="mb-10 w-full cursor-pointer rounded-lg border border-white py-2 text-center text-[13px] font-bold text-white transition-all hover:border-[#875FFE] hover:bg-[#875FFE] md:mb-0 md:max-w-[307px]"
            >
              Confirm
            </button>
            <div className="z-10 flex flex-col items-center justify-center gap-5 md:flex-row">
              <h2 className="mr-8 text-[19.48px] font-medium text-white md:text-[23px]">
                Follow Us
              </h2>
              <div className="flex items-center gap-4">
                <Link target="_blank" to={"https://x.com/Futrmarket"}>
                  <img
                    src="/LandingPage/LightTheBeacon/Twitter.png"
                    alt="Twitter Icon"
                    className="tilt-slow h-[43px] w-[49px] md:h-[47px] md:w-[53px]"
                  />
                </Link>
                <Link target="_blank" to={"https://discord.gg/3ekUTtFMpG"}>
                  <img
                    src="/LandingPage/LightTheBeacon/Discord.png"
                    alt="Discord Icon"
                    className="tilt-slow block h-[82px] w-[69px] md:hidden md:h-[86px] md:w-[73px]"
                  />
                </Link>
              </div>
              <Link target="_blank" to={"https://discord.gg/3ekUTtFMpG"}>
                <img
                  src="/LandingPage/LightTheBeacon/Discord.png"
                  alt="Discord"
                  className="tilt-slow hidden h-[86px] w-[73px] md:block"
                />
              </Link>
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
        </form>
      </CustomModal>
      <CustomModal onClose={() => setIsSuccess(false)} open={isSuccess}>
        <div
          style={{
            backgroundImage: `url(/LandingPage/Fellowship/WhiteBg.png)`,
          }}
          className="-m-10 min-h-[558.3px] w-full max-w-[411.35px] scale-75 bg-cover bg-center sm:scale-100"
        >
          <div className="flex h-full min-h-[558.3px] w-full flex-col items-start justify-end gap-10">
            <div className="relative flex w-full justify-center">
              <img
                width={252}
                height={143}
                src="/LandingPage/LightTheBeacon/Ring.png"
                alt="ring"
                className="relative z-20"
              />
            </div>
            <div className="-space-y-5 px-8 py-10">
              <h1 className={`text-[50px] font-bold text-black`}>
                {error ? "ERROR!" : "EMAIL SENT"}
              </h1>
              <p className="mt-5 text-[20px] text-black">
                {error ? "PLEASE TRY AGAIN" : "THANK YOU"}
              </p>
            </div>
            <svg
              width="923"
              height="923"
              viewBox="0 0 923 923"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-5/12 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <g filter="url(#filter0_f_34280_1246)">
                <circle cx="461.5" cy="461.5" r="174.5" fill="#DA9C28" />
              </g>
              <defs>
                <filter
                  id="filter0_f_34280_1246"
                  x="0.899994"
                  y="0.899994"
                  width="921.2"
                  height="921.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="143.05"
                    result="effect1_foregroundBlur_34280_1246"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </CustomModal>
    </>
  );
}
