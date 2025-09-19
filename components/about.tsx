import Image from "next/image";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";
import bghero from "@/public/images/bghero.jpg";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="py-12 md:py-24 bg-stone-800">
        <div className="max-w-full mx-auto px-4 flex flex-wrap gap-x-24 md:px-40">
          {/* Section header */}
          <div className="max-w-full mx-auto md:px-80 sm:text-left md:text-center pb-12 md:pb-16 ">
            <h3 className="text-amber-600 text-base font-notosans">About AbundEarth Alliance</h3>
            <h2 className="text-gray-100 text-3xl font-light sm:text-3xl pt-5 pb-10">About AbundEarth Alliance</h2>
            <p className="text-gray-300 text-lg font-normal leading-normal font-notosans">
              Our work is where circular design, sustainability standards, and real-world execution meet. We don’t just consult — we co-create solutions that are viable in the field, measurable on paper, and scalable across borders.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-8 md:gap-20">
            {/* 1st item */}
            <div className="relative grid sm:grid-cols-1 md:grid-cols-12 grid-rows-1 gap-8 md:gap-20 items-center">
              {/* Content */}
              <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-1 mb-8 md:mb-0" data-aos="fade-right">
                <div className="">
                  {/* <h3 className="text-amber-600 text-base font-notosans">Our Mission</h3> */}
                  <h2 className="text-amber-600 text-2xl font-notoserif font-light pb-4">Our Mission</h2>
                  <p className="text-base text-gray-300 mb-4 font-notosans">
                    To regenerate land, valorize agricultural waste, and design export-ready solutions that connect South America’s natural abundance with Europe’s leadership in circular innovation — driving prosperity without planetary compromise.
                    We exist to turn agricultural byproducts, overlooked residues, and degraded landscapes into meaningful economic and environmental opportunities. Through high-trust partnerships and modular circular technologies, we make
                    sustainability not just possible — but profitable and scalable. Our work empowers producers, landowners, and institutions to shift from linear resource extraction to regenerative value creation — transforming waste into building
                    blocks for a better future.
                  </p>
                  {/* <ul className="text-lg text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-base text-gray-300 font-notosans">Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-base text-gray-300 font-notosans">Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-base text-gray-300 font-notosans">Amet consectetur adipiscing elit</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* Image */}
              <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-7 mb-8 md:mb-0" data-aos="fade-up">
                <Image className="min-w-full mx-auto md:max-w-none h-auto" src={bghero} width={540} height={405} alt="Features 01" />
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative grid sm:grid-cols-1 md:grid-cols-12 grid-rows-1 gap-8 md:gap-20 items-center">
              {/* Image */}
              <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-1 mb-8 md:mb-0 rtl order-2 md:order-1" data-aos="fade-up">
                <Image className="min-w-full mx-auto md:max-w-none h-auto" src={bghero} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-7 order-1 md:order-2" data-aos="fade-left">
                <div className="">
                  {/* <h3 className="text-amber-600 text-base font-semibold font-notosans">Our Vision</h3> */}
                  <h2 className="text-amber-600 text-2xl font-notoserif font-light pb-4">Our Vision</h2>
                  <p className="text-base text-gray-300 mb-4 font-notosans">
                    To lead a global transformation toward measurable, just, and circular economies — where success is defined not by what we extract, but by what we restore, reconnect, and regenerate. We envision a future where land degradation is
                    reversed, supply chains serve both people and planet, and circular trade is not a niche — but the norm. In this future, businesses can grow without harming ecosystems, and communities can thrive through innovation rooted in
                    respect, collaboration, and resilience.
                  </p>
                  {/* <ul className="text-lg text-gray-300 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
