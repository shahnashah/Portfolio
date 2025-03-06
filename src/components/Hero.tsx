'use client'
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const links = [
  {
    title: "LinkedIn",

    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/shahna-shah-01882b26a",
  },

  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Whatsapp",
    icon: (
      <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Mail",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:shahanashah9630@gmail.com",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/shahnashah",
  },
];
const Hero = () => {
  return (
    <div className="bg-black h-screen w-full ">
      <BackgroundBeamsWithCollision className="flex flex-col gap-12">
        <h2 className="text-4xl relative z-20 lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight ">
          Hey There
          <br />
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r  from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              
              <TypewriterEffectSmooth
                words={[
                  { text: "I" },
                  { text: "am" },
                  { text: "Shahna" },
                  { text: "Shah" },
                ]}
              />
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              <TypewriterEffectSmooth
                words={[
                  { text: "I" },
                  { text: "am" },
                  { text: "Shahna" },
                  { text: "Shah" },
                ]}
              />
            </div>
          </div>
        </h2>
        <FloatingDock items={links} />
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Hero;
