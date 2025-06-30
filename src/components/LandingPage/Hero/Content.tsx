import { motion } from "framer-motion";

export default function Content() {
  return (
    <div className="relative flex h-full w-full items-center justify-center lg:h-full">
      <h1 className="z-20 text-center text-4xl font-black lg:text-6xl">
        Bold ideas
        <br className="md:hidden" /> served Twice.
      </h1>

      {/* Pipe */}
      <motion.img
        className="absolute top-[150px] left-20 aspect-[10/10] h-[70px] w-[70px] md:top-[140px] md:left-40 md:h-[100px] md:w-[100px] lg:top-[200px] lg:left-[200px] lg:h-[140px] lg:w-[140px] 2xl:top-[180px] 2xl:left-[490px] 2xl:h-[170px] 2xl:w-[170px]"
        src="/LandingPage/Hero/Vector/PipeTransparent.png"
        alt="Pipe"
      />

      <motion.img
        className="absolute top-[180px] left-2 aspect-[10/10] h-[70px] w-[70px] md:top-[220px] md:h-[120px] md:w-[120px] lg:top-[350px] lg:left-[50px] lg:h-[140px] lg:w-[140px] 2xl:top-[350px] 2xl:left-[250px] 2xl:h-[180px] 2xl:w-[180px]"
        src="/LandingPage/Hero/Vector/Sign.png"
        alt="Sign"
      />

      <motion.img
        className="absolute bottom-[150px] left-5 aspect-[10/10] h-[90px] w-[90px] md:bottom-[120px] md:left-14 md:h-[120px] md:w-[120px] lg:bottom-[250px] lg:left-[120px] lg:h-[140px] lg:w-[140px] 2xl:bottom-[160px] 2xl:left-[450px] 2xl:h-[200px] 2xl:w-[200px]"
        src="/LandingPage/Hero/Vector/Blockchain.png"
        alt="Blockchain"
      />

      <motion.img
        className="absolute bottom-[160px] left-32 aspect-[10/10] h-[70px] w-[70px] md:bottom-[140px] md:left-[280px] md:h-[100px] md:w-[100px] lg:bottom-[200px] lg:left-[340px] lg:h-[120px] lg:w-[120px] 2xl:bottom-[140px] 2xl:left-[820px] 2xl:h-[140px] 2xl:w-[140px]"
        src="/LandingPage/Hero/Vector/Spoon.png"
        alt="Spoon"
      />

      <motion.img
        className="absolute right-5 bottom-[170px] aspect-[10/10] h-[70px] w-[70px] md:right-[140px] md:bottom-[120px] md:h-[135px] md:w-[135px] lg:right-[350px] lg:bottom-[180px] lg:h-[150px] lg:w-[150px] 2xl:right-[460px] 2xl:bottom-[180px] 2xl:h-[180px] 2xl:w-[180px]"
        src="/LandingPage/Hero/Vector/GameController.png"
        alt="GameController"
      />

      <motion.img
        className="absolute top-[150px] right-16 aspect-[10/10] h-[70px] w-[70px] md:top-[100px] md:right-36 md:h-[120px] md:w-[120px] lg:top-[150px] lg:right-[350px] lg:h-[150px] lg:w-[150px] 2xl:right-[500px] 2xl:h-[170px] 2xl:w-[170px]"
        src="/LandingPage/Hero/Vector/Ring.png"
        alt="Ring"
      />

      <motion.img
        className="absolute top-[220px] right-0 aspect-[10/10] h-[80px] w-[80px] md:h-[120px] md:w-[120px] lg:top-[360px] lg:h-[150px] lg:w-[180px] 2xl:top-[350px] 2xl:right-[200px] 2xl:h-[200px] 2xl:w-[260px]"
        src="/LandingPage/Hero/Vector/BreadAndTea.png"
        alt="BreadAndTea"
      />
    </div>
  );
}
