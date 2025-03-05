import React from "react";
import SkillCard from "../components/SkillCard";
import pandas from "../assets/Pandas.png";
import numpy from "../assets/numpy.png";
import matplotlib from "../assets/matplotlib.png";
import seaborn from "../assets/seab.png";
import powerbi from "../assets/bi.png";
import excel from "../assets/excel.png";
import scikit from "../assets/sklearn.png";
import c from "../assets/pngwing.com.png";
import py from "../assets/python.png";
import cpp from "../assets/c-.png";
import js from "../assets/js.png";
import html from "../assets/html-5.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongo.png";
import mysql from "../assets/mysql.png";
import sqlite from "../assets/sqlite.png";
import oracle from "../assets/oracle.png";
import git from "../assets/git (1).png";
import github from "../assets/gihub.png";
import vscode from "../assets/vsc.png";
import notebook from "../assets/main-logo.png";

const Skills = () => {
  return (
    <div className="bg-black h-fit w-screen md:w-full flex items-center justify-between flex-col pt-10 md:pt-28 pb-10 gap-10 text-white text-4xl ">
      <p className="text-yellow-400 text-3xl font-semibold tracking-widest uppercase" data-aos = "fade-up"  data-aos-delay="100">
        Skills
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-9 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-20" data-aos = "fade-up"  data-aos-delay="200">
      <SkillCard
          heading="Programming Languages"
          photo1={c}
          photo2={cpp}
          photo3={py}
          photo4={js} 
        />
        <SkillCard
          heading="Data Cleaning and Modelling"
          photo1={pandas}
          photo2={numpy}
          photo3={scikit}
          photo4={excel}
        />
        <SkillCard
          heading="Data Visulalization"
          photo1={pandas}
          photo2={powerbi}
          photo3={matplotlib}
          photo4={seaborn}
        />
        <SkillCard
          heading="Web Development"
          photo1={html}
          photo2={css}
          photo3={react}
          photo4={express}
        />
        <SkillCard
          heading="Database"
          photo1={mongodb}
          photo2={sqlite}
          photo3={mysql}
          photo4={oracle}
        />
        <SkillCard
          heading="Tools and VC"
          photo1={git}
          photo2={github}
          photo3={vscode}
          photo4={notebook}
        />
      </div>
    </div>
  );
};

export default Skills;
