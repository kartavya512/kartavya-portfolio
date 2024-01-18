import React from "react";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

const page = () => {
  
  return (
    <div className=" bg-white lg:mr-[10%] lg:ml-[10%] border">
      <Navbar />
      <div className=" lg:p-12 p-5 lg:pt-40 pt-40 lg:w-[75%]">
        <h1 className="text-5xl font-bold">
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <p className="pt-10 p-1 font-normal text-gray-500">
          I've worked on a variety of projects over the years and I'm proud of
          the progress I've made. Many of these projects are open-source and
          available for others to explore and contribute to. If you're
          interested in any of the projects I've worked on, please feel free to
          check out the code and suggest any improvements or enhancements you
          might have in mind. Collaborating with others is a great way to learn
          and grow, and I'm always open to new ideas and feedback.
        </p>
      </div>
      <Projects />
      <Footer/>
    </div>
  );
};

export default page;
