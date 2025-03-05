import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import indore1 from '@/public/assets/indore1.jpg'
import indore2 from '@/public/assets/indore2.jpg'
import sih from '@/public/assets/sih.jpg'
import sih2 from '@/public/assets/sih2.jpg'
import college from '@/public/assets/college.jpg'
import Nav from "@/components/Nav";
import Experience from "@/components/Experience";

const journey = () => {
  // const data = [
  //   {
  //     title: "Sept 2024 - Present",
  //     content: (
  //       <div>
  //         <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-2xl font-normal mb-4">
  //           Working as a Full Stack Developer Intern at{" "}
  //           <span className="italic font-bold text-blue-700">
  //             Sprint Analytics Private Limited.
  //           </span>
  //         </p>
  //         <p className="text-xl italic">Pune, Maharashtra</p>
  //         <div className="grid grid-cols-2 gap-4">
  //           {/* <Image
  //             src="https://assets.aceternity.com/templates/startup-3.webp"
  //             alt="startup template"
  //             width={500}
  //             height={500}
  //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //           /> */}
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "March 2024",
  //     content: (
  //       <div>
  //         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
  //         Finished as the runner-up in the esteemed
  //           <span className="italic font-bold text-blue-700"> Web Granth</span> hosted at <span className="italic">
  //             Chameli Devi Group of Institutions, Indore.
  //           </span>
  //         </p>
  //         <p className="italic text-xl">Indore, Madhya Pradesh</p>
  //         <div className="grid grid-cols-2 gap-4 mt-8">
  //           <Image
  //             src={indore1}
  //             alt="hero template"
  //             width={500}
  //             height={500}
  //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //           />
  //           <Image
  //             src={indore2}
  //             alt="feature template"
  //             width={500}
  //             height={500}
  //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //           />
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "December 2023",
  //     content: (
  //       <div>
  //         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
  //         Proudly led the <span className="italic font-bold">Code Connect</span> team to the Grand Finale of the <span className="text-blue-700 italic font-bold">Smart India Hackathon 2023</span>, held at <span className="italic">
  //         Manipal University Jaipur.
  //         </span>
  //         </p>
  //         <p className=" italic text-xl">Jaipur, Rajasthan</p>
  //         <div className="grid grid-cols-2 gap-4 mt-8">
  //           <Image
  //             src={sih}
  //             alt="hero template"
  //             width={500}
  //             height={500}
  //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //           />
  //           <Image
  //             src={sih2}
  //             alt="hero template"
  //             width={500}
  //             height={500}
  //             className="rounded-lg object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //           />
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "December 2023",
  //     content: (
  //       <div>
  //         <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-2xl font-normal mb-4">
  //         Achieved the <span className="italic text-blue-700 font-bold">Best Academics</span> award for achieving highest marks in <span className="italic">RGPV University Exams, Bhopal</span>.
  //         </p>
  //         <p className="italic text-xl">Bhopal, Madhya Pradesh</p>
  //         <div className="grid grid-cols-2 gap-4 mt-8">
  //           <Image
  //             src={college}
  //             alt="hero template"
  //             width={500}
  //             height={500}
  //             className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //           />
            
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];
  return (
    <div className="w-full">
      <Nav/>
      <Experience />
    </div>
  );
};

export default journey;