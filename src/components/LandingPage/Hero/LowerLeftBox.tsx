import PartnersMarquee from "./ParntersMarquee";

export default function LowerLeftBox() {
  return (
    <div className="absolute bottom-0 left-0 flex flex-col items-end justify-end">
      <div className="bg-primary-bg relative h-[70px] w-[180px] rounded-tr-2xl md:h-[100px] md:w-[300px] lg:h-[150px] lg:w-[480px] lg:rounded-tr-[50px]">
        <PartnersMarquee />
        <div className="bg-primary-bg absolute bottom-full left-0">
          <div className="bg-yellow-bg h-[50px] w-[50px] rounded-bl-2xl lg:rounded-bl-[50px]" />
        </div>
        <div className="bg-primary-bg absolute bottom-0 left-full">
          <div className="bg-yellow-bg h-[50px] w-[50px] rounded-bl-2xl lg:rounded-bl-[50px]" />
        </div>
      </div>
    </div>
  );
}
