import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function AboutUs() {
  return (
    <>
      <section className="pt-12 md:pt-24 bg-amber-50 sm:text-left md:text-center">
        <div className="max-w-full mx-auto px-4 flex flex-wrap gap-x-24 md:px-8">
          {/* Section header */}
          <div className="flex-1 min-w-0 px-4 md:px-80">
            <h3 className="text-amber-600 text-base font-notosans">Who we are</h3>
            <h2 className="text-amber-800 text-3xl font-normal sm:text-3xl pt-5 pb-10">Who we are</h2>
            <p className="text-amber-800 text-base font-normal leading-normal font-notosans">
              AbundEarth Alliance is a regenerative consultancy and solution integrator. We work with advanced Danish technology, South American producers, and global partners to deliver measurable circular impact through Circular production systems,
              ESG & CO₂ reduction consulting, Export and market access strategy and Sustainable infrastructure for public, defense & post-mining. Every solution we design is rooted in regeneration, impact transparency, and fair trade.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-24 bg-amber-50">
        {/* Testimonials */}
        <div className="relative pt-20  px-4 md:px-40 grid sm:grid-cols-1 md:grid-cols-12 grid-rows-1 gap-20 flex-wrap ">
          {/* 1st testimonial */}
          <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-1" data-aos="fade-up">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage01} width={110} height={110} alt="Testimonial 01" />
                {/* <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-amber-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg> */}
              </div>
            </div>
            <h2 className="text-2xl font-notoserif py-4 text-amber-800 font-normal">Ricardo Miranda</h2>
            <p className="text-amber-900 mb-4 font-notosans text-base font-semibold">Founder & Lead Strategist – AbundEarth Alliance</p>
            <p className="text-base text-amber-800 grow font-notosans">
              Ricardo Miranda is the founder of AbundEarth Alliance and the connector behind many of the moving parts that make it work. Originally from Brazil and now based in Denmark, Ricardo blends his background in IT security, risk governance,
              and international trade and logistics with a deep commitment to building partnerships that are grounded in trust and purpose. His path has never followed a straight line — and that’s part of what makes his leadership so adaptive. From
              military service to import/export, from complex supply chains to emerging circular strategies, Ricardo has spent his career connecting dots across continents, industries, and people. He leads with action, always looking for ways to make
              regeneration practical and inclusive. While continuously expanding his formal ESG and circular economy expertise, he’s already deep in the work — designing pilot projects, enabling trade, and aligning sustainability with reality on the
              ground.
            </p>
            <ul className="text-base text-amber-800 grow mt-4 font-notosans">
              <li>His role in the Alliance:</li>
              <li className="ml-4 list-disc">Translates big ideas into real implementation</li>
              <li className="ml-4 list-disc">Connects South American producers with European systems and standards</li>
              <li className="ml-4 list-disc">Leads operations and partner coordination across borders</li>
              <li className="ml-4 list-disc">Circular Production Systems</li>
              <li className="ml-4 list-disc">Keeps the mission human, measurable, and moving forward</li>
            </ul>
            <blockquote className="text-base text-amber-800 italic mt-4 font-notosans">“I don’t pretend to have all the answers. I just stay close to the work — and bring the right people together to build something better.”</blockquote>
            <div className="text-amber-800 font-medium mt-6 pt-5 border-t border-amber-600">
              <p className="text-amber-800 not-italic font-notosans py-2">Contact Ricardo</p> -{" "}
              <a className="text-amber-800 hover:text-amber-800 transition duration-150 ease-in-out font-notosans font-semibold" href="#0">
                +45 22 44 55 66
              </a>
            </div>
          </div>

          {/* 2nd testimonial */}
          <div className="sm:col-span-1 md:col-span-6 sm:col-start-1 md:col-start-7" data-aos="fade-up" data-aos-delay="200">
            <div>
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage02} width={110} height={110} alt="Testimonial 02" />
                {/* <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-amber-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                </svg> */}
              </div>
            </div>
            <h2 className="text-2xl font-notoserif py-4 text-amber-800 font-normal">Alexander Stig Gamborg</h2>
            <p className="text-amber-900 mb-4 font-notosans text-base font-semibold">Strategic Advisor & Business Development Partner – AbundEarth Alliance</p>
            <p className="text-base text-amber-800 grow font-notosans">
              Alexander Stig Gamborg is a strategic co-lead of AbundEarth Alliance, offering the depth, structure, and long-view approach that turns sustainable ambitions into long-term value. As the owner of Møllerup Gods, one of Denmark’s historic
              estates, Alexander has turned his family legacy into a platform for regeneration — one that supports pilot projects, field testing, and cross-sector collaboration. With a background in military leadership, business development, and
              sustainability investment, Alexander brings the kind of steady presence and institutional trust that’s essential for building bridges between green technology, public policy, and circular solutions at scale. He’s actively involved in
              Advance Nonwoven A/S and Convert A/S, both of which serve as key technology pillars for the Alliance’s work in agriculture, land restoration, and infrastructure.
            </p>
            <ul className="text-base text-amber-800 grow mt-4 font-notosans">
              <li>His role in the Alliance:</li>
              <li className="ml-4 list-disc">Anchors the Nordic base and long-term strategy</li>
              <li className="ml-4 list-disc">Opens doors to public and private partnerships</li>
              <li className="ml-4 list-disc">Provides access to proven technologies and trusted networks</li>
              <li className="ml-4 list-disc">Keeps innovation grounded in reality and aligned with purpose</li>
              <li className="ml-4 list-disc">Keeps the mission human, measurable, and moving forward</li>
            </ul>
            <blockquote className="text-base text-amber-800 italic mt-4 font-notosans">“Sustainability isn’t about trends — it’s about building something that lasts, with people you believe in.”</blockquote>
            <div className="text-amber-800 font-medium mt-6 pt-5 border-t border-amber-600">
              <p className="text-amber-800 not-italic font-notosans py-2">Contact Alexander</p> -{" "}
              <a className="text-amber-800 hover:text-amber-300 transition duration-150 ease-in-out font-notosans font-semibold" href="#0">
                +45 22 44 55 66
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
