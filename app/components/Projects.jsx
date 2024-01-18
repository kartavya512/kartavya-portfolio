
"use client"
import React, { useState } from "react";
import cybertapri from "../assests/cybertapri.jpeg";
import DocNow from "../assests/DocNow.png";
import PulseTasks from "../assests/PulseTasks.jpeg";
import Process from "../assests/Still in process.svg";
import Image from "next/image";
import Link from "next/link";
import Work from "./Work";
import { Link as LucideLink } from "lucide-react";

const Projects = () => {
  const [hoverd, setHoverd] = useState(false);
  const [hoverp, setHoverp] = useState(false);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 p-10 ">
        <div className={`p-4  border rounded-lg ${hoverd? 'bg-gray-200':'bg-white'}`}
          onMouseEnter={() => setHoverd(true)}
          onMouseLeave={() => setHoverd(false)}>
          <Image src={DocNow} className="h-40" alt="DocNow" />
          <div className="pl-2">
            <h1 className={`font-bold text-lg pt-2 ${hoverd?'text-black':'text-gray-500 '}`}>DocNow</h1>
            <p className={` mt-3 text-sm font-normal  ${hoverd?'text-gray-600':'text-gray-400'}`}>
              I developed a Doctor Consultant Website with Django, Bootstrap,
              HTML, CSS, and JavaScript. The site features real-time video calls
              and secure user authentication for convenient doctor-patient
              interactions. Additionally, I integrated payment processing and
              email notifications, ensuring a seamless and secure healthcare
              experience.
            </p>
            <div className={`pt-4 text-sm font-medium text-gray-500 ${hoverd?'text-green-600':'text-gray-500'} `}>
              <Link href="https://github.com/kartavya512/DocNow">
                View Project
              </Link>
            </div>
          </div>
        </div>

        <div className={`p-4  border rounded-lg ${hoverp? 'bg-gray-200':'bg-white'}`}
          onMouseEnter={() => setHoverp(true)}
          onMouseLeave={() => setHoverp(false)}>
          <Image src={PulseTasks} className="h-40" alt="cybertapri" />
          <div className="pl-2">
            <h1 className={`font-bold text-lg pt-2 ${hoverp?'text-black':'text-gray-500 '}`}>PulseTasks</h1>
            <p className={` mt-3 text-sm font-normal  ${hoverp?'text-gray-600':'text-gray-400'}`}>
              Pulsetask is a cool to-do app I made using Next.js and React for
              the front end, Tailwind CSS for style, and Firebase f for
              authentication and database functionalities. It helps you stay
              organized with a simple and fun design!
            </p>
            <div className={`pt-8 text-sm font-medium text-gray-500 ${hoverp?'text-green-600':'text-gray-500'} `}>
              <Link href="https://pulsetask.netlify.app/">View Project</Link>
            </div>
          </div>
        </div>

        
      </div>
      <div className="pt-10">
        <Work />
      </div>
      
       
    </div>
  );
};

export default Projects;
