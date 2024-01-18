"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { Github, Instagram, Linkedin, LinkedinIcon, Mail } from "lucide-react";
import kartavyaprofilepic from "../assests/kartavyaprofilepic.jpeg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const my = () => {
  const [github, setGithub] = useState(false);
  const [linkedin, setlinkedin] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [mail, setMail] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const height = isMobile ? 300 : 400;
  

  return (
    <div>
      <Navbar />
      <div className="lg:mt-20 lg:m-[6%] m-[2%]  ">
        <div className="flex lg:flex-row flex-col-reverse pt-6 lg:pt-20">
          <div className="lg:w-[45%] p-2">
            <h1 className="pt-5 lg:pt-0 text-3xl lg:text-4xl font-bold">
              Full-Stack Web Developer & SEO Expert
            </h1>
            <div className="lg:pt-10 pt-5 text-gray-500 block pr-1">
              Hey there! I'm Kartavya Gupta, a tech enthusiast who builds cool
              stuff on the internet. I'm not just good with making websites look
              nice (that's the frontend), but I also know how to make them work
              smoothly behind the scenes (that's the backend).
              <div className="pt-2">
                On top of that, I've got a little superpower called SEO. It's
                like making sure your website gets a high-five from search
                engines so more people can find it easily.
              </div>{" "}
              <div className="pt-2">
                I love learning and facing new challenges, so if you've got
                something exciting, count me in!
              </div>
            </div>
            <div className="flex pt-10">
              {instagram ? (
                <Link href="https://www.instagram.com/mera___safarnama/">
                  <Instagram
                    className=""
                    onMouseEnter={() => setInstagram(true)}
                    onMouseLeave={() => setInstagram(false)}
                  />
                </Link>
              ) : (
                <Link href="https://www.instagram.com/mera___safarnama/">
                  <Instagram
                    color="#474747"
                    onMouseEnter={() => setInstagram(true)}
                    onMouseLeave={() => setInstagram(false)}
                  />
                </Link>
              )}

              {github ? (
                <Link href="https://github.com/kartavya512">
                  <Github
                    className="ml-5"
                    onMouseEnter={() => setGithub(true)}
                    onMouseLeave={() => setGithub(false)}
                  />
                </Link>
              ) : (
                <Link href="https://github.com/kartavya512">
                  <Github
                    color="#474747"
                    className="ml-5"
                    onMouseEnter={() => setGithub(true)}
                    onMouseLeave={() => setGithub(false)}
                  />
                </Link>
              )}
              {linkedin ? (
                <Link href="https://www.linkedin.com/in/kartavya-gupta-b50294194/">
                  <LinkedinIcon
                    className="ml-5"
                    onMouseEnter={() => setlinkedin(true)}
                    onMouseLeave={() => setlinkedin(false)}
                  />
                </Link>
              ) : (
                <Link href="https://www.linkedin.com/in/kartavya-gupta-b50294194/">
                  <LinkedinIcon
                    color="#474747"
                    className="ml-5"
                    onMouseEnter={() => setlinkedin(true)}
                    onMouseLeave={() => setlinkedin(false)}
                  />
                </Link>
              )}

              {mail ? (
                <Link href="mailto:kartavyagupta51@gmail.com">
                  <Mail
                    className="ml-5"
                    onMouseEnter={() => setMail(true)}
                    onMouseLeave={() => setMail(false)}
                  />
                </Link>
              ) : (
                <Link href="mailto:kartavyagupta51@gmail.com">
                  <Mail
                    color="#474747"
                    className="ml-5"
                    onMouseEnter={() => setMail(true)}
                    onMouseLeave={() => setMail(false)}
                  />
                </Link>
              )}
            </div>

            <Link href="https://drive.google.com/file/d/1MFkSoNFnsDjcsROQ9p3aAS6vk7wmxWDz/view?usp=sharing">
              <div className="pt-5 font-bold  opacity-60 hover:opacity-100">
                Download CV
              </div>
            </Link>
          </div>
          <div className="lg:pl-32 pl-10 lg:pt-0 pt-12 rounded-lg">
            <Image
              src={kartavyaprofilepic}
              priority={true}
              className="rounded"
              height={height}
            ></Image>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default my;
