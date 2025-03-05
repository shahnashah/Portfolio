"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import js from "@/public/assets/js.png";
import c from "@/public/assets/pngwing.com.png";
import cpp from "@/public/assets/c-.png";
import react from "@/public/assets/react.png";
import express from "@/public/assets/express.png";
import mongodb from "@/public/assets/mongo.png";
import mysql from "@/public/assets/mysql.png";
import git from "@/public/assets/git (1).png";
import github from "@/public/assets/gihub.png";
import vscode from "@/public/assets/vsc.png";
import tailwind from "@/public/assets/tailwind.png";
import jwt from "@/public/assets/jwt.png";
import java from "@/public/assets/java.png";
import { TypewriterEffect } from "./ui/typewriter-effect";

// Frameworks
const frameworks = [
  { id: 1, name: "React.js", image: react },
  { id: 2, name: "Express.js", image: express },
  { id: 6, name: "Tailwind CSS", image: tailwind },
  
];

// Databases
const databases = [
  { id: 1, name: "MySQL", image: mysql },
  { id: 2, name: "MongoDB", image: mongodb },
];

// Programming Languages
const programmingLanguages = [
  { id: 1, name: "JavaScript", image: js },
  { id: 2, name: "Java", image: java },
  { id: 3, name: "C++", image: cpp },
  { id: 4, name: "C", image: c },
];

// Tools
const tools = [
  { id: 1, name: "Git", image: git },
  { id: 2, name: "GitHub", image: github },
  { id: 3, name: "VS Code", image: vscode },
  { id: 4, name: "JWT", image: jwt },
];

const words = [{ text: "Skills" }];

function Skills() {
  return (
    <div className="flex px-10 pt-10 md:px-52 flex-col w-full ">
      <div className=" text-7xl text-center font-bold">
        <TypewriterEffect words={words} />
      </div>
      <div className="mt-16">
        {/* Frameworks Section */}
        <div className="flex flex-col gap-6">
          <p className="text-4xl font-bold  italic">
            Frameworks
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={frameworks} />
          </div>
        </div>

        {/* Databases Section */}
        <div className="flex flex-col gap-6 mt-12">
          <p className="text-4xl font-bold italic">
            Databases
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={databases} />
          </div>
        </div>

        {/* Programming Languages Section */}
        <div className="flex flex-col gap-6 mt-12">
          <p className="text-4xl font-bold  italic">
            Programming Languages
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={programmingLanguages} />
          </div>
        </div>


        {/* Tools Section */}
        <div className="flex flex-col gap-6 mt-12 mb-10">
          <p className="text-4xl font-bold  italic">
            Tools
          </p>
          <div className="grid md:grid-cols-6 grid-cols-2 md:gap-10 gap-10 items-center justify-center w-full">
            <AnimatedTooltip items={tools} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
