import React from "react";
import css from "../assests/css.png";
import Image from "next/image";
import html from "../assests/HTML5.png";
import javaScript from "../assests/javascript.jpg";
import react from "../assests/react.jpg";
import next from "../assests/nextjs.png";
import TAILWIND from "../assests/tailwind.png";
import Python from "../assests/Python.png";
import django from "../assests/django.png";
import FLASK from "../assests/flask-logo.png";
import Sql from "../assests/Sql.png";
import mongodb from "../assests/mongodb.jpg";
import firebase from "../assests/firebase.png";
import seo from "../assests/seo.png";
import wix from "../assests/Wix.png";
import shopify from "../assests/Shopify.png";







const Skills = () => {
  return (
    <div>
      <div className="pt-12">
        <div className="text text-center font-bold text-3xl">My Skills</div>

        <div className="">
          <div className="grid lg:grid-cols-3 gap-5 p-10">
            <div className="flex flex-col items-center border rounded-lg border-1 p-5 hover:bg-white">
              <div className="font-bold text-2xl block text-center">Front-end Development</div>
              <div className="grid grid-cols-3 gap-9 pt-10">
                <div className="flex flex-col items-center ">
                <Image height={50} src={html}></Image>
                  
                  <div className="font-bold pt-2">HTML</div>
                </div>

                <div className="flex flex-col items-center ">
                <Image height={50} src={css}></Image>
                  <div className="font-bold pt-2">CSS</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={javaScript }></Image>
                  <div className="font-bold pt-2">JAVASCRIPT</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={react }></Image>
                  <div className="font-bold pt-2">REACT.Js</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={next}></Image>
                  <div className="font-bold pt-2">NEXT.JS</div>
                </div>

                <div className="flex flex-col items-center pt-2">
                  <Image height={50} src={TAILWIND }></Image>
                  <div className="font-bold pt-2 text-center">TAILWIND CSS</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center border rounded-lg border-1 p-5 hover:bg-white">
              <div className="font-bold text-2xl block text-center">Back-end & Database Development</div>
              <div className="grid grid-cols-3 gap-9 pt-10">
                <div className="flex flex-col items-center ">
                  <Image height={50} src={Python}></Image>
                  <div className="font-bold pt-2">PYTHON</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={django}></Image>
                  <div className="font-bold pt-2">DJANGO</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={FLASK}></Image>
                  <div className="font-bold pt-2">FLASK</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={Sql}></Image>
                  <div className="font-bold pt-2">SQL</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={mongodb}></Image>
                  <div className="font-bold pt-2">MONGODB</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={firebase}></Image>
                  <div className="font-bold pt-2">FIREBASE</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center border rounded-lg border-1 p-5 hover:bg-white">
              <div className="font-bold text-2xl block text-center">
                SEO & E-commerce Development
              </div>
              <div className="grid grid-cols-3 gap-9 pt-10">
                <div className="flex flex-col items-center ">
                  <Image height={50}  src={seo}></Image>
                  <div className="font-bold pt-2">SEO</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} className="pt-2"  src={wix}></Image>
                  <div className="font-bold pt-2 ">WIX</div>
                </div>

                <div className="flex flex-col items-center ">
                  <Image height={50} src={shopify}></Image>
                  <div className="font-bold pt-2">SHOPIFY</div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
