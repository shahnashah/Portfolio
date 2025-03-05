'use client'
import Nav from "@/components/Nav";
import { FocusCards } from "@/components/ui/focus-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import dice_game from "@/public/assets/dice_game.png";
import lensify from "@/public/assets/lensify.png";
import random_jokes from "@/public/assets/random_jokes.png";
import password_manager from "@/public/assets/password_manager.png";
import shine_villa from "@/public/assets/shine_villa.jpeg";
import todo_list from "@/public/assets/todo_list.png";

function Projects() {
  const cards = [
    {
      title: "Shine Villa",
      src: shine_villa,
      tech: "MERN",
      link: "https://github.com/shahnashah/synvilla.git",
    },
    {
      title: "Password Manager",
      src: password_manager,
      tech: "React",
      link: "https://fluffy-palmier-bd042e.netlify.app/",
    },
    {
      title: "Lensify",
      src: lensify,
      tech: "Html, css, js",
      link: "https://lensify-p1.netlify.app/",
    },
    {
      title: "Dice Game",
      src: dice_game,
      tech: "HTML, CSS, JS",
      link: "https://legendary-stroopwafel-f06d51.netlify.app/",
    },
    {
      title: "Random jokes",
      src: random_jokes,
      tech: "HTML, CSS, JS",
      link: "https://shahnashah.github.io/random_jokes/",
    },
    {
      title: "TODO List",
      src: todo_list,
      tech: "HTML, CSS, JS",
      link: "https://cosmic-puppy-e56f0d.netlify.app/",
    },
  ];

  const words = [
    { text: "Projects" }
  ]

  return (
    <div className="pt-20 md:pt-32 bg-gradient-to-r from-black to-neutral-800 max-h-fit">
      <div className="px-52 text-6xl font-bold"><TypewriterEffect words={words} /></div>
 
      <Nav /> 
       <FocusCards cards={cards} /> 
    </div>
  );
}

export default Projects;
