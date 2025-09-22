"use client";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

export default function WhatWeDo() {
  const [selectedTab, setSelectedTab] = useState("Circular Economy Integration");

  const tabItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="mx-2 my-auto">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Circular Economy Integration",
      desc: "Circular Economy Integration content goes here. This tab provides a general overview of the services and offerings.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="mx-2 my-auto">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "ESG & CO₂ Strategy",
      desc: "ESG & CO₂ Strategy content goes here. This tab provides a general overview of the services and offerings.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="mx-2 my-auto">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Trade Facilitation & Market Access",
      desc: "Trade Facilitation & Market Access content goes here. This tab provides a general overview of the services and offerings.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="mx-2 my-auto">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Land & Post-Mining Regeneration",
      desc: "Land & Post-Mining Regeneration content goes here. This tab provides a general overview of the services and offerings.",
    },
  ];

  return (
    <>
      <section id="what" className="py-12 md:py-24 bg-stone-800">
        <div className="relative px-4 md:px-4 lg:px-40 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-1 gap-20">
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-6 sm:col-start-1 md:col-start-1 lg:col-start-1">
            <div className="text-amber-600 text-base font-notosans">What we do</div>
            <h2 className="text-gray-100 text-3xl font-light sm:text-3xl pt-5 pb-10">We turn agricultural residues into opportunities — for business, for people, and for the planet.</h2>
            <p className="text-gray-300 text-base font-normal leading-normal font-notosans">
              AbundEarth Alliance is a regenerative consultancy and solution integrator. We work with advanced Danish technology, South American producers, and global partners to deliver measurable circular impact through Circular production systems,
              ESG & CO₂ reduction consulting, Export and market access strategy and Sustainable infrastructure for public, defense & post-mining. Every solution we design is rooted in regeneration, impact transparency, and fair trade.
            </p>
          </div>

          <div className="sm:col-span-1 md:col-span-1 lg:col-span-6 sm:col-start-1 md:col-start-2 lg:col-start-7">
            {/* Image */}
            <Image src="/images/bghero.jpg" width={500} height={500} alt="Picture of the author" className="min-w-full" />
          </div>
        </div>

        <Tabs.Root className="relative pt-12 md:pt-24 px-4 md:px-4 lg:px-40 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-1 gap-4 md:gap-20" value={selectedTab} orientation="vertical" onValueChange={(val) => setSelectedTab(val)}>
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-6 sm:col-start-1 md:col-start-1 lg:col-start-1">
            <Tabs.List className="hidden flex-col items-start gap-y-5 py-1 text-base sm:flex" aria-label="Manage your account">
              {tabItems.map((item, idx) => (
                <Tabs.Trigger
                  key={idx}
                  className="flex justify-between border data-[state=active]:border-amber-600 data-[state=active]:text-amber-600 data-[state=active]:shadow-sm outline-amber-600 py-1.5 px-3 duration-150 text-gray-300 hover:text-amber-600 hover:border-amber-600 active:border-amber-600 font-normal w-full text-left font-notosans text-base pt-3 pb-3 group"
                  value={item.title}
                >
                  <span>{item.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" className="mx-2 my-auto">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-amber-600 group-active:stroke-amber-600 data-[state=active]:stroke-amber-600 " />
                  </svg>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <div className="relative text-gray-500 sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
              <select value={selectedTab} className="py-2 px-3 w-full bg-transparent appearance-none outline-none border shadow-sm focus:border-gray-800 text-base" onChange={(e) => setSelectedTab(e.target.value)}>
                {tabItems.map((item, idx) => (
                  <option key={idx}>{item.title}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Content */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-6 sm:col-start-1 md:col-start-2 lg:col-start-7">
            {tabItems.map((item, idx) => (
              <Tabs.Content key={idx} className="py-6" value={item.title}>
                <p className="text-base leading-normal font-notosans text-gray-300 font-normal ">This is {item.desc} Tab.</p>
              </Tabs.Content>
            ))}
          </div>
        </Tabs.Root>
      </section>
    </>
  );
}

// import React from 'react';
// import { FaRegHandshake, FaIndustry, FaLeaf, FaGlobeAmericas } from 'react-icons/fa';
// import { SiGoogle, SiMicrosoft, SiAmazonaws } from 'react-icons/si';
// import { MdBusiness } from 'react-icons/md';
// import { IoIosPeople } from 'react-icons/io';
// import { GiEarthAmerica } from 'react-icons/gi';
// import { BiSupport } from 'react-icons/bi';
// import { TbBrandTesla } from 'react-icons/tb';
// import { RiCommunityFill } from 'react-icons/ri';
// import { BsFillShieldLockFill } from 'react-icons/bs';
// import { AiFillEnvironment } from 'react-icons/ai';
// import { FaRegHandshake as FaHandshake } from 'react-icons/fa';
// import { FaIndustry as FaIndustryIcon } from 'react-icons/fa';
// import { FaLeaf as FaLeafIcon } from 'react-icons/fa';
// import { FaGlobeAmericas as FaGlobeIcon } from 'react-icons/fa';
// import { SiGoogle as SiGoogleIcon } from 'react-icons/si';
// import { SiMicrosoft as SiMicrosoftIcon } from 'react-icons/si';
// import { SiAmazonaws as SiAmazonawsIcon } from 'react-icons/si';
// import { AiFillEnvironment as AiFillEnvironmentIcon } from 'react-icons/ai';
// import { FaRegHandshake as FaRegHandshakeIcon } from 'react-icons/fa';
// import { FaIndustry as FaIndustryIcon } from 'react-icons/fa';
