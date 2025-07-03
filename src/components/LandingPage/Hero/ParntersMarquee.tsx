import Marquee from "react-fast-marquee";

export default function PartnersMarquee() {
  const partners = [
    { src: "/LandingPage/Hero/Partners/Fautor.png", alt: "Fautor" },
    { src: "/LandingPage/Hero/Partners/Line.png", alt: "Line" },
    { src: "/LandingPage/Hero/Partners/Cog.png", alt: "Cog" },
    { src: "/LandingPage/Hero/Partners/KlickFinance.png", alt: "KlickFinance" },
    {
      src: "/LandingPage/Hero/Partners/Xenea.png",
      alt: "Xenea",
      className: "w-[120px] lg:w-[160px]",
    },
  ];

  return (
    <div className="group absolute inset-0 flex w-full flex-shrink-0 overflow-hidden">
      <Marquee pauseOnHover>
        {partners.map((partner, idx) => (
          <img
            key={`${idx}`}
            className={`mr-4 aspect-[10/10] h-[40px] w-[40px] object-contain lg:mr-10 lg:h-[60px] lg:w-[60px] ${
              partner.className || ""
            }`}
            src={partner.src}
            alt={partner.alt}
          />
        ))}
      </Marquee>
    </div>
  );
}
