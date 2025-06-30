export default function Navbar() {
  return (
    <div className="absolute inset-x-0 flex items-center justify-between lg:px-5">
      <img
        className="aspect-[10/10] h-[70px] w-[70px] object-contain md:h-[130px] md:w-[130px]"
        src="/Logo/SecondBreakfast.png"
        alt="Logo"
      />
      <div className="hidden bg-[#1F1F1F] lg:block lg:rounded-full lg:px-10 lg:py-5">
        <ul className="flex items-center gap-5 text-white lg:gap-10 lg:font-semibold">
          <li>Our Products</li>
          <li>About us</li>
          <li>Light the Beacons</li>
        </ul>
      </div>
      <div />
    </div>
  );
}
