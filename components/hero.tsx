import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="#home" className="relative">
      {/* Section header width video */}
      <div className="relative pt-32 pb-10 px-4 md:pt-40 md:pb-16 bg-amber-50">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="text-3xl md:text-5xl mb-4 font-notoserif font-light text-amber-800" data-aos="fade-up">
            Regenerating Land. Rebuilding Value. Redefining Trade.
          </h1>
          <p className="text-base md:text-lg mb-10 font-notosans text-amber-800" data-aos="fade-up" data-aos-delay="200">
            We connect circular technologies with natural resources to build profitable, CO₂-reducing solutions — empowering communities, restoring ecosystems, and enabling sustainable trade between South America, the EU, and beyond.
          </p>
          <div className="flex flex-col md:flex-row sm:justify-center gap-1 md:gap-4 max-w-xs mx-auto sm:max-w-none" data-aos="fade-up" data-aos-delay="400">
            <div data-aos="fade-up" data-aos-delay="600">
              <a className="text-sm btn font-notosans text-gray-100 bg-stone-600 hover:bg-stone-800 w-full sm:w-auto sm:ml-4 mb-4" href="#0">
                Download Overview
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="text-sm btn bg-amber-600 font-notosans text-white samber-600 hover:bg-amber-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">
                Let’s Work Together
              </a>
            </div>
          </div>
        </div>

        {/* <ModalVideo thumb={VideoThumb} thumbWidth={1024} thumbHeight={576} thumbAlt="Modal video thumbnail" video="/videos/video.mp4" videoWidth={1920} videoHeight={1080} /> */}
      </div>

      {/* Hero content */}

      <div className="relative pt-12 pb-12 md:pt-80 md:pb-80 bg-cover bg-center bg-no-repeat bg-[url(/images/bghero.jpg)]"></div>

      <div className="relative pt-12 pb-12 px-4 md:px-40 grid sm:grid-cols-1 md:grid-cols-12 grid-rows-1 gap-4 md:gap-20 bg-amber-50">
        <div className="sm:col-span-1 md:col-span-6">
          <h2 className="text-3xl mb-4 font-notoserif font-normal text-amber-800" data-aos="fade-up">
            Headline here
          </h2>
        </div>
        <div className="flex flex-col sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-7 gap-8 md:gap-8">
          <p className="flex text-base font-notosans text-amber-900" data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="border border-amber-600 hover:border-amber-800 py-2 px-6 text-sm font-semibold text-amber-600 hover:text-amber-800 w-full mb-4 sm:w-auto sm:mb-0 font-notosans" href="#0">
                Learn More
              </a>
            </div>
            {/* <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="mx-2 my-auto">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div> */}
            {/* <div data-aos="fade-up" data-aos-delay="600">
              <a className="text-sm font-semibold text-stone-600 hover:text-stone-800 w-full sm:w-auto sm:ml-4 font-notosans" href="#0">
                Download Overview
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
