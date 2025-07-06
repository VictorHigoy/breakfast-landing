import { Link } from "react-router-dom";

const data1 = [
  {
    name: "Gillianne Dela Cruz",
    title: "Silmarillustrator",
    linkedIn: "/",
    background: "/LandingPage/Fellowship/Images/Gillianne/background.png",
    imageBg: "/LandingPage/Fellowship/Images/Gillianne/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/Gillianne/image.png",
    imageWidth: "213.19",
    imageHeight: "293",
    positionLeft: "left-1/2",
    positionTop: "-top-11",
    textColor: "#FFFFFF",
  },
  {
    name: "Jay Elamar",
    title: "Forgemaster of Code",
    linkedIn: "https://www.linkedin.com/in/jay-termulo",
    background: "/LandingPage/Fellowship/Images/Jay/background.png",
    imageBg: "/LandingPage/Fellowship/Images/Jay/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/Jay/image.png",
    imageWidth: "247",
    imageHeight: "267",
    positionLeft: "left-20",
    positionTop: "-top-8",
    textColor: "#FFFFFF",
  },
  {
    name: "Victor Higoy",
    title: "Elf of Elegance",
    linkedIn: "https://www.linkedin.com/in/victor-higoy-jr-6a770320b/",
    background: "/LandingPage/Fellowship/Images/Victor/background.png",
    imageBg: "/LandingPage/Fellowship/Images/Victor/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/Victor/image.png",
    imageWidth: "221.24",
    imageHeight: "267",
    positionLeft: "left-1/2",
    positionTop: "-top-11",
    textColor: "#000000",
  },
];

const data2 = [
  {
    name: "Vince De Vera",
    title: "Overseer of the Fellowship",
    linkedIn:
      "https://www.linkedin.com/in/vincedevera?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    background: "/LandingPage/Fellowship/Images/Vince/background.png",
    imageBg: "/LandingPage/Fellowship/Images/Vince/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/Vince/image.png",
    imageWidth: "301.89",
    imageHeight: "370",
    positionLeft: "left-1/2",
    positionTop: "-top-20",
    textColor: "#FFFFFF",
  },
  {
    name: "Aerold Balboa",
    title: "Invoker of the Tech Flame",
    linkedIn: "",
    background: "/LandingPage/Fellowship/Images/Aerold/background.png",
    imageBg: "/LandingPage/Fellowship/Images/Aerold/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/Aerold/image.png",
    imageWidth: "206.52",
    imageHeight: "328",
    positionLeft: "left-36",
    positionTop: "-top-11",
    textColor: "#000000",
  },
];

const data3 = [
  {
    name: "John Ogama",
    title: "Builder of Realms",
    linkedIn: "/",
    background: "/LandingPage/Fellowship/Images/John/background.png",
    imageBg: "/LandingPage/Fellowship/Images/John/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/John/image.png",
    imageWidth: "218.7",
    imageHeight: "301",
    positionLeft: "left-1/2",
    positionTop: "-top-8",
    textColor: "#000000",
  },
  {
    name: "Kenneth Miclat",
    title: "UXling of the White Board",
    linkedIn: "https://www.linkedin.com/in/kenneth-james-miclat-12a558239/",
    background: "/LandingPage/Fellowship/Images/Kenneth/background.png",
    imageBg: "/LandingPage/Fellowship/Images/Kenneth/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/Kenneth/image.png",
    imageWidth: "227.4",
    imageHeight: "289",
    positionLeft: "left-28",
    positionTop: "-top-11",
    textColor: "#000000",
  },
  {
    name: "Chelsy Tang",
    title: "Apprentice of User Realms",
    linkedIn: "",
    background: "/LandingPage/Fellowship/Images/Chelsy/background.png",
    imageBg: "/LandingPage/Fellowship/Images/Chelsy/imageBackground.png",
    image: "/LandingPage/Fellowship/Images/Chelsy/image.png",
    imageWidth: "216.09",
    imageHeight: "280",
    positionLeft: "left-1/2",
    positionTop: "-top-11",
    textColor: "#000000",
  },
];

export default function Fellowship() {
  return (
    <div className="relative h-auto w-full overflow-hidden bg-[url('/LandingPage/Fellowship/fellowshipBg.png')] bg-cover bg-center">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2">
        <img
          src="/LandingPage/Fellowship/Ring.png"
          className="h-auto max-w-[2364.43px]"
          alt="Ring"
        />
      </div>
      <div className="mx-auto max-w-[1106px] pt-10 pb-10 md:pb-24">
        <h1 className="text-center text-[45.05px] font-black text-white md:text-[97.38px]">
          The Fellowship
        </h1>
        <div className="my-20 flex max-w-[1106px] justify-between">
          <div className="hidden h-full w-full flex-col items-start gap-2 md:flex">
            {data1.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item.background})` }}
                  className={`relative flex h-full min-h-[382px] w-full max-w-[287px] flex-col items-center bg-cover bg-center`}
                >
                  <div className="max-w-[203px]">
                    <div
                      style={{ backgroundImage: `url(${item.imageBg})` }}
                      className={`relative mt-7 h-full min-h-[239px] w-full min-w-[203px] bg-cover bg-center`}
                    >
                      <div
                        className={`absolute ${item.positionTop} ${item.positionLeft} -translate-x-1/2`}
                      >
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            minHeight: `${item.imageHeight}px`,
                            minWidth: `${item.imageWidth}px`,
                          }}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-1 pb-3">
                      <h1
                        style={{ color: item.textColor }}
                        className={`text-[19px] leading-none font-black text-nowrap`}
                      >
                        {item.name}
                      </h1>
                      <p
                        style={{ color: item.textColor }}
                        className={`text-[16.4px] font-extralight`}
                      >
                        {item.title}
                      </p>
                      <Link
                        target="_blank"
                        to={item.linkedIn}
                        className="origin-left transition-all hover:scale-105"
                      >
                        <img
                          src="/LandingPage/Fellowship/LinkedInLink.png"
                          alt="LinkedIn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex h-full w-full flex-col items-center gap-5 px-5 md:gap-2 md:px-0">
            {data2.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item.background})` }}
                  className={`relative flex h-full min-h-[464px] w-full max-w-[341.87px] flex-col items-center bg-cover bg-center`}
                >
                  <div className="max-w-[268.71px]">
                    <div
                      style={{ backgroundImage: `url(${item.imageBg})` }}
                      className={`relative mt-7 h-full min-h-[300px] w-full min-w-[268.71px] bg-cover bg-center`}
                    >
                      <div
                        className={`absolute ${item.positionTop} ${item.positionLeft} -translate-x-1/2`}
                      >
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            minHeight: `${item.imageHeight}px`,
                            minWidth: `${item.imageWidth}px`,
                          }}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 pt-1 pb-3">
                      <h1
                        style={{ color: item.textColor }}
                        className="text-[30px] leading-none font-black text-nowrap text-white"
                      >
                        {item.name}
                      </h1>
                      <p
                        style={{ color: item.textColor }}
                        className="text-[16.4px] font-extralight text-white"
                      >
                        {item.title}
                      </p>
                      <Link
                        to={item.linkedIn}
                        target="_blank"
                        className="origin-left transition-all hover:scale-105"
                      >
                        <img
                          src="/LandingPage/Fellowship/LinkedInLink2.png"
                          alt="LinkedIn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="flex h-full w-full flex-row items-start gap-2 overflow-auto pt-5 pr-5 md:hidden">
              {data1.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.background})` }}
                    className={`relative flex h-full min-h-[382px] w-full min-w-[287px] flex-col items-center bg-cover bg-center`}
                  >
                    <div className="max-w-[203px]">
                      <div
                        style={{ backgroundImage: `url(${item.imageBg})` }}
                        className={`relative mt-7 h-full min-h-[239px] w-full min-w-[203px] bg-cover bg-center`}
                      >
                        <div
                          className={`absolute ${item.positionTop} ${item.positionLeft} -translate-x-1/2`}
                        >
                          <img
                            src={item.image}
                            alt=""
                            style={{
                              minHeight: `${item.imageHeight}px`,
                              minWidth: `${item.imageWidth}px`,
                            }}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 pt-1 pb-3">
                        <h1
                          style={{ color: item.textColor }}
                          className={`text-[19px] leading-none font-black text-nowrap`}
                        >
                          {item.name}
                        </h1>
                        <p
                          style={{ color: item.textColor }}
                          className={`text-[16.4px] font-extralight`}
                        >
                          {item.title}
                        </p>
                        <Link
                          target="_blank"
                          to={item.linkedIn}
                          className="origin-left transition-all hover:scale-105"
                        >
                          <img
                            src="/LandingPage/Fellowship/LinkedInLink.png"
                            alt="LinkedIn"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex h-full w-full flex-row items-start gap-2 overflow-auto pt-5 pr-5 md:hidden">
              {data3.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.background})` }}
                    className={`relative flex h-full min-h-[382px] w-full min-w-[287px] flex-col items-center bg-cover bg-center`}
                  >
                    <div className="max-w-[203px]">
                      <div
                        style={{ backgroundImage: `url(${item.imageBg})` }}
                        className={`relative mt-7 h-full min-h-[239px] w-full min-w-[203px] bg-cover bg-center`}
                      >
                        <div
                          className={`absolute ${item.positionTop} ${item.positionLeft} -translate-x-1/2`}
                        >
                          <img
                            src={item.image}
                            alt=""
                            style={{
                              minHeight: `${item.imageHeight}px`,
                              minWidth: `${item.imageWidth}px`,
                            }}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 pt-1 pb-3">
                        <h1
                          style={{ color: item.textColor }}
                          className={`text-[19px] leading-none font-black text-nowrap`}
                        >
                          {item.name}
                        </h1>
                        <p
                          style={{ color: item.textColor }}
                          className={`text-[16.4px] font-extralight`}
                        >
                          {item.title}
                        </p>
                        <Link
                          target="_blank"
                          to={item.linkedIn}
                          className="origin-left transition-all hover:scale-105"
                        >
                          <img
                            src="/LandingPage/Fellowship/LinkedInLink.png"
                            alt="LinkedIn"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden h-full w-full flex-col items-end gap-2 md:flex">
            {data3.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item.background})` }}
                  className={`relative flex h-full min-h-[382px] w-full max-w-[287px] flex-col items-center bg-cover bg-center`}
                >
                  <div className="max-w-[203px]">
                    <div
                      style={{ backgroundImage: `url(${item.imageBg})` }}
                      className={`relative mt-7 h-full min-h-[239px] w-full min-w-[203px] bg-cover bg-center`}
                    >
                      <div
                        className={`absolute ${item.positionTop} ${item.positionLeft} -translate-x-1/2`}
                      >
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            minHeight: `${item.imageHeight}px`,
                            minWidth: `${item.imageWidth}px`,
                          }}
                          className="z-10 object-cover"
                        />
                      </div>
                    </div>
                    <div className="relative z-20 flex flex-col gap-1 pt-1 pb-3">
                      <h1
                        style={{ color: item.textColor }}
                        className={`text-[19px] leading-none font-black text-nowrap`}
                      >
                        {item.name}
                      </h1>
                      <p
                        style={{ color: item.textColor }}
                        className={`text-[16.4px] font-extralight`}
                      >
                        {item.title}
                      </p>
                      <Link
                        target="_blank"
                        to={item.linkedIn}
                        className="origin-left transition-all hover:scale-105"
                      >
                        <img
                          src="/LandingPage/Fellowship/LinkedInLink.png"
                          alt="LinkedIn"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
