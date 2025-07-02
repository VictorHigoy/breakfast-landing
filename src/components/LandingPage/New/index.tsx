export default function News() {
  return (
    <div className="mx-auto max-w-[1500px] px-8 py-20">
      <h1 className="text-[57.63px] font-black text-white">News</h1>
      <div className="flex max-w-[1340px] gap-5 overflow-auto">
        <div className="mb-3 min-w-[325px] md:min-w-[433px] 2xl:mb-0">
          <video
            controls
            autoPlay
            className="mb-4 h-auto w-[325px] rounded-2xl md:w-[433px]"
          >
            <source src="/LandingPage/News/news-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="mb-1 max-w-[221px] text-[24.07px] leading-8 font-bold text-white md:mb-2 md:max-w-[294px] md:text-[32px]">
            Futr. Partners with Fautor
          </h1>
          <p className="date-font text-[12px] text-white md:text-[16px]">
            Mar 21, 2025
          </p>
        </div>
        <div className="mb-3 min-w-[325px] md:min-w-[433px] 2xl:mb-0">
          <video
            controls
            autoPlay
            className="mb-4 h-auto w-[325px] rounded-2xl md:w-[433px]"
          >
            <source src="/LandingPage/News/news-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="mb-1 max-w-[221px] text-[24.07px] leading-8 font-bold text-white md:mb-2 md:max-w-[294px] md:text-[32px]">
            Futr. Partners with Xenea
          </h1>
          <p className="date-font text-[12px] text-white md:text-[16px]">
            Mar 21, 2025
          </p>
        </div>
        <div className="mb-3 min-w-[325px] md:min-w-[433px] 2xl:mb-0">
          <video
            controls
            autoPlay
            className="mb-4 h-auto w-[325px] rounded-2xl md:w-[433px]"
          >
            <source src="/LandingPage/News/news-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 className="mb-1 max-w-[221px] text-[24.07px] leading-8 font-bold text-white md:mb-2 md:max-w-[294px] md:text-[32px]">
            Futr. Partners with Klink Financee
          </h1>
          <p className="date-font text-[12px] text-white md:text-[16px]">
            Mar 21, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
