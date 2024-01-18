import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";


const page = () => {
  return (
    <div className="bg-white lg:mr-[10%] lg:ml-[10%] border">
      <Navbar />

      <div className="lg:pt-40 pt-28 lg:p-20 p-10">
        <h1 className="font-bold text-4xl text-gray-800 lg:w-[75%]">
          Let's Get in Touch: Ways to Connect with Me
        </h1>
        <p className="pt-10 font-normal text-gray-600">
          Thank you for your interest in getting in touch with me. I welcome
          your feedback, questions, and suggestions. If you have a specific
          question or comment, please feel free to email me directly at 
          
            <Link href=""> <span className="font-bold text-gray-500"> Kartavyagupta51@gmail.com </span> </Link>
          
          . I make an effort to respond to all messages within 24 hours,
          although it may take me longer during busy periods. Finally, if you
          prefer to connect on social media, you can find me on 
          <Link href=""> <span className="font-bold text-blue-500">LinkedIn </span></Link>  Thanks again for your
          interest, and I look forward to hearing from you!
        </p>

        <div className="lg:pt-20 pt-10">
          <div className="flex-col flex space-y-6 ">
            <Link href="mailto:kartavyagupta51@gmail.com">
              <div className="flex hover:opacity-100 opacity-65 lg:w-1/2 ">
                <Mail />
                <div className="pl-4">Kartavyagupta51@gmail.com</div>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/kartavya-gupta-b50294194/">
              <div className="flex hover:opacity-100 opacity-65 lg:w-1/2 ">
                <Linkedin />

                <div className="pl-4">Connect on Linkedin</div>
              </div>
            </Link>
            <Link href="https://www.instagram.com/mera___safarnama/">
              <div className="flex hover:opacity-100 opacity-65 lg:w-1/2 ">
                <Instagram></Instagram>
                <div className="pl-4">Follow on Instagram</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
