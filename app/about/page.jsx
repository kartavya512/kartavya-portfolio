import React from "react";
import Navbar from "../components/Navbar";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import kartavyaprofilepic from "../assests/kartavyaprofilepic.jpeg"
import Footer from '../components/Footer'
import useMediaQuery from "react-responsive"


const page = () => {
  
  return (
    <div className="bg-white lg:mr-[10%] lg:ml-[10%] lg:border">
      <Navbar />
      <div className="lg:pt-36 pt-40 lg:p-10 p-4">
        <div className="flex lg:flex-row flex-col  justify-between">
          <div className="lg:w-[45%]">
            <h1 className="font-bold text-4xl text-gray-800">
              Hi, I'm Kartavya, a tech enthusiast from India, where I code and
              create digital wonders.
            </h1>
            <p className="pt-10 font-normal text-gray-600">
              I've honed my skills in building robust web applications and love
              the collaborative aspect of working on diverse projects. Open to
              new ideas and always eager to make things better, I'm ready to
              team up for innovative solutions. Let's create something awesome
              together!
            </p>
          </div>
          <div className="lg:w-1/2 pl-20">
            <Image src={kartavyaprofilepic} className="pt-10" height={300}></Image>
            <div className="pt-10">
              <div className="flex-col flex space-y-6 ">
                <Link href="https://github.com/kartavya512">
                  <div className="flex hover:opacity-100 opacity-65 lg:w-1/2 ">
                    <Github />
                    <div className="pl-4">Follow on Github</div>
                  </div>
                </Link>
                <Link href="https://www.linkedin.com/in/kartavya-gupta-b50294194/">
                  <div className="flex hover:opacity-100 opacity-65 lg:w-1/2 ">
                    <Linkedin />

                    <div className="pl-4">Follow on Linkedin</div>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/mera___safarnama/">
                  <div className="flex hover:opacity-100 opacity-65 lg:w-1/2 ">
                    <Instagram></Instagram>
                    <div className="pl-4">Follow on Instagram</div>
                  </div>
                </Link>
                <div className="">
                <hr className='bg-gray-200 border-none h-1 lg:w-3/5 w-[90%] '></hr></div>
                <Link href="mailto:kartavyagupta51@gmail.com">
                  <div className="flex hover:opacity-100 opacity-65">
                    <Mail/>
                    <div className="pl-4">Kartavyagupta51@gmail.com</div>
                  </div>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
