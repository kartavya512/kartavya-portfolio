"use client"
import React, { useState } from "react";
import cybertapri from "../assests/cybertapri.jpeg";
import Image from "next/image";
import petrends from "../assests/Pettrends.jpeg";
import MusicPortfolio from "../assests/MusicPortfolio.jpeg";
import Link from "next/link";

const Work = () => {
  const [hovercy, setHovercy] = useState(false);
  const [hoverpet, setHoverpet] = useState(false);
  const [hovermu, setHovermu] = useState(false);
  return (
    <div>
      <div className="text text-center font-bold text-3xl pt-10">
        Freelance Projects
      </div>
      <div className="grid lg:grid-cols-3 gap-10  pt-20 p-10 pb-20">
        <div
          className={`p-4  border rounded-lg ${hovercy? 'bg-gray-200':'bg-white'}`}
          onMouseEnter={() => setHovercy(true)}
          onMouseLeave={() => setHovercy(false)}
        >
          <Image src={cybertapri} className="h-40" alt="cybertapri" />
          <div className="pl-2">
            <h1 className={`font-bold text-lg pt-2 ${hovercy?'text-black':'text-gray-500 '}`}>cybertapri</h1>
            <p className={` mt-3 text-sm font-normal  ${hovercy?'text-gray-600':'text-gray-400'}`}>
              I created Cybertapri, an online store, using Wix. I carefully
              organized products into different categories for easy navigation
              and boosted its visibility on search engines with effective SEO
              strategies. This project showcases my skills in building
              user-friendly websites and optimizing them for better online
              presence
            </p>
            <div className={`pt-4 text-sm font-medium text-gray-500 ${hovercy?'text-green-600':'text-gray-500'} `}>
              <Link href="https://www.cybertapri.in/">View Project</Link>
            </div>
          </div>
        </div>

        <div className={`p-4  border rounded-lg ${hoverpet? 'bg-gray-200':'bg-white'}`}
          onMouseEnter={() => setHoverpet(true)}
          onMouseLeave={() => setHoverpet(false)}>
          <Image src={petrends} className="h-40" alt="PetTrends" />
          <div className="pl-2">
            <h1 className={`font-bold text-lg pt-2 ${hoverpet?'text-black':'text-gray-500 '}`}>PetTrends</h1>
            <p className={` mt-3 text-sm font-normal  ${hoverpet?'text-gray-600':'text-gray-400'}`}>
              I built Pettrends on Shopify, a playful online pet store,
              highlighting my skills in web development. It's all about making
              pet shopping enjoyable and hassle-free, blending creativity with
              functionality for a standout online experience.
            </p>
            <div className={`pt-4 text-sm font-medium text-gray-500 ${hoverpet?'text-green-600':'text-gray-500'} `}>
              <Link href="https://pettrends.in/">View Project</Link>
            </div>
          </div>
        </div>

        <div className={`p-4  border rounded-lg ${hovermu? 'bg-gray-200':'bg-white'}`}
          onMouseEnter={() => setHovermu(true)}
          onMouseLeave={() => setHovermu(false)}>
          <Image src={MusicPortfolio} className="h-40" alt="MusicPortfolio" />
          <div className="pl-2">
            <h1 className={`font-bold text-lg pt-2 ${hovermu?'text-black':'text-gray-500 '}`}>
              Music Portfolio
            </h1>
            <p className={` mt-3 text-sm font-normal  ${hovermu?'text-gray-600':'text-gray-400'}`}>
              I created a unique website for a musician using Framer, turning it
              into a virtual stage for showcasing their music journey. From
              design to functionality, I strive to make websites that are both
              eye-catching and user-friendly, providing an engaging experience
              for visitors.
            </p>
            <div className={`pt-4 text-sm font-medium text-gray-500 ${hovermu?'text-green-600':'text-gray-500'} `}>
              <Link href="https://justfortest.info/">View Project</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
