import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mx-auto mt-5 mb-18 flex w-full justify-center min-[742px]:mt-16 min-[742px]:mb-20">
      <div className="bg-rotate relative flex w-[400px] items-center justify-center min-[742px]:min-h-[670px] min-[742px]:w-[670px]">
        <div className="-mt-2 flex flex-col items-center justify-center p-7 min-[742px]:p-0">
          <img
            src="/LandingPage/Footer/LogoWhite.png"
            alt="Breakfast Logo"
            className="mb-3 h-[70px] w-[90px] min-[742px]:mb-7 min-[742px]:h-[202px] min-[742px]:w-[235px]"
          />
          <div className="flex items-center justify-center gap-5">
            <Link target="_blank" to={"https://x.com/Futrmarket"}>
              <img
                src="/LandingPage/LightTheBeacon/Twitter.png"
                alt="Twitter Icon"
                className="tilt-slow h-[30px] w-[35px] min-[742px]:h-[77.19px] min-[742px]:w-[87.05px]"
              />
            </Link>
            <Link target="_blank" to={"https://discord.gg/3ekUTtFMpG"}>
              <img
                src="/LandingPage/LightTheBeacon/Discord.png"
                alt="Discord"
                className="tilt-slow h-[67px] w-[55px] min-[742px]:h-[141.25px] min-[742px]:w-[119.89px]"
              />
            </Link>
          </div>
          <p className="footer-text max-w-[332.718px] text-center text-[10px] text-white min-[742px]:text-[25.2px]">
            “If there’s gonna be a <br /> footer, it better be hairy, <br />{" "}
            barefoot, and stealing <br /> second breakfast.”
          </p>
        </div>
      </div>
    </div>
  );
}
