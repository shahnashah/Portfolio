"use client";
import dice_game from "@/public/assets/dice_game.png";
import lensify from "@/public/assets/lensify.png";
import random_jokes from "@/public/assets/random_jokes.png";
import password_manager from "@/public/assets/password_manager.png";
import shine_villa from "@/public/assets/shine_villa.jpeg";
import todo_list from "@/public/assets/todo_list.png";
// import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { TypewriterEffect } from "./ui/typewriter-effect";

const words = [{ text: "Projects" }];

const data = [
  {
    title: "Shine Villa",
    src: shine_villa,
    category: "MERN",
    link: "https://github.com/shahnashah/synvilla.git",
  },
  {
    title: "Password Manager",
    src: password_manager,
    category: "React",
    link: "https://fluffy-palmier-bd042e.netlify.app/",
  },
  {
    title: "Lensify",
    src: lensify,
    category: "Html, css, js",
    link: "https://lensify-p1.netlify.app/",
  },
  {
    title: "Dice Game",
    src: dice_game,
    category: "HTML, CSS, JS",
    link: "https://legendary-stroopwafel-f06d51.netlify.app/",
  },
  {
    title: "Random jokes",
    src: random_jokes,
    category: "HTML, CSS, JS",
    link: "https://shahnashah.github.io/random_jokes/",
  },
  {
    title: "TODO List",
    src: todo_list,
    category: "HTML, CSS, JS",
    link: "https://cosmic-puppy-e56f0d.netlify.app/",
  },
  
];

function Projects() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-fit px-4 md:px-52 py-10 bg-gradient-to-br from-black to-neutral-900">
      <div className="text-center text-6xl font-bold">
        <TypewriterEffect words={words} />
      </div>
      <Carousel items={cards} />
    </div>
  );
}

export default Projects;
