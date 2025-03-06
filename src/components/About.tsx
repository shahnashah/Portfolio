"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
// import Nav from "@/components/Nav";
import { TypewriterEffect } from "./ui/typewriter-effect";
import first from "../public/assets/first.png";
import second from "../public/assets/second.png";
import third from "../public/assets/third.png";
import interests from "../public/assets/interests.jpg";



const words = [{ text: "About" }, { text: "Me" }];

function Aboutme() {
  return (
    <div className=" mx-10 px-2 md:px-0">
      <div className="text-center mt-10">
        {" "}
        <TypewriterEffect words={words} className="font-3xl" />
      </div>
      <TracingBeam className="px-6 mt-10  h-fit ">
        <div className=" mx-auto antialiased px-2 pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-xl italic w-fit px-4 py-3 mb-4">
                {item.badge}
              </h2>
              {/* <p className={twMerge("text-xl  mb-4")}>{item.title}</p>  */}
              <div className="text-md">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="200"
                    width="600"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "",
    description: (
      <>
        <p>
          Hello I am{" "}
          <span className="text-purple-500 font-semibold text-2xl">
            Shahna Shah
          </span>
          .
        </p>
        <p>
          I am a passionate software engineer with a focus on full-stack
          development. I enjoy building dynamic, user-friendly web applications
          using React, MongoDB, and Express.js.
        </p>
        <p>
          I&apos;m excited about advancing in my career, learning more in the field of web development, and contributing to projects that make a difference.
        </p>
      </>
    ),
    badge: "Brief Intro",
    image: first
  },
  {
    title: "",
    description: (
      <>
        <p>
          I completed my 10th schooling at Satyam Shiksha Niketan Higher Secondary School, Beherwal, achieving a strong
          academic record with 96.75% and 12th grade at Sahara public higher secondary school with 90.8%.
          <br />
          My academic journey built a solid foundation in subjects like
          Mathematics, Physics, and Information Technology, which sparked my
          interest in technology and problem-solving.
        </p>
      </>
    ),
    badge: "Schooling",
    image: second  },
  {
    title: "",
    description: (
      <>
        <p>
          I started pursuing my B.Tech. at IES College of Technology in 2022,
          where I&rsquo;m in the 5th semester with a CGPA of 8.21. <br /> My
          coursework and projects have helped me gain expertise in areas like
          software development, web technologies, and backend systems.
          I&rsquo;ve actively participated in various technical events and
          innovation projects.
        </p>
      </>
    ),
    badge: "Graduation",
    image: third  },
  {
    title: "",
    description: (
      <>
       
        <p>
           I&apos;m passionate about learning more about{" "}
          <strong>technologies</strong> and staying updated on the latest{" "}
          <strong>tech innovations</strong>. I’m always on the lookout for new
          opportunities in the tech space that challenge me to grow both
          personally and professionally.
        </p>
      </>
    ),
    badge: "Interests",
    image: interests  },
];

export default Aboutme;
