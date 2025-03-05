import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import javacourse from "@/public/assets/javacourse.jpeg";
import internship from "@/public/assets/internship.jpeg";
import csir from "@/public/assets/csir.jpeg";
import technovation from "@/public/assets/technovation.jpeg";
import iot from "@/public/assets/iot.jpeg";
import ieee from "@/public/assets/ieee.jpeg";
import academics from "@/public/assets/academics.jpeg";
import techfest from "@/public/assets/techfest.jpeg";


const Experience = () => {
  const data = [
    {
      title: "October 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
            Participated in MESMERIZE by{"  "}
            <span className="italic font-bold text-blue-700">
            TECHFEST IIT BOMBAY.{"  "} 
            </span>
            Built a maze solving robot with the help of Arduino and NodeMCU.
          </p>
          <p className="italic text-xl">RICR, Bhopal</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={techfest}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
        </div>
      ),
    },
    {
      title: "May - June 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Completed my internship in the field of Web Development by{" "} 
            <span className="italic font-bold text-blue-700">
              Devtern
            </span>{" "}
            . Got hands on experience on development of real life projects.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={internship}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Successfully completed the{" "}
            <span className="italic font-bold">Introduction to Java</span> course by{" "}
            <span className="text-blue-700 italic font-bold">
              Infosys and Springboard
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={javacourse}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Participated in {" "}
            <span className="italic font-bold">TECHNOVATION-2023</span>a project competition organised by{" "}
            <span className="text-blue-700 italic font-bold">
              IES College of Technology and AICTE Idea Lab.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={technovation}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },{
      title: "September 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Successfully completed the hands-on training in{" "}
            <span className="italic font-bold">CONNECTX: Weaving things via internet</span> organised by{" "}
            <span className="text-blue-700 italic font-bold">
              VISION MANIT and Indeyes Infotech
            </span>
          </p>
          <p className="italic text-xl">MANIT, Bhopal</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={iot}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Participated in the {" "}
            <span className="italic font-bold">Hack Ceremony{" "}</span>a project exhibition event held at  {" "}
            <span className="text-blue-700 italic font-bold">
              IES University.{" "}
            </span>
            and achieved 3rd runner in the contest.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={ieee}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Achieved the{" "}
            <span className="italic text-blue-700 font-bold">
              Best Academics
            </span>{" "}
            award for achieving highest marks in{" "}
            <span className="italic">RGPV University Exams, Bhopal</span>.
          </p>
          <p className="italic text-xl">Bhopal, Madhya Pradesh</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={academics}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
            Successfully completed the two days intense Hands-on workshop on {" "}
            <span className="italic font-bold">Renewable Energy Solutions: Need, Sources, System{" "}</span> organised by{" "}
            <span className="text-blue-700 italic font-bold">
              CSIR-AMPRI & IES College of Technology.
            </span>
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src={csir}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <p className="italic text-xl">CSIR-AMPRI, Bhopal</p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-fit ">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;

