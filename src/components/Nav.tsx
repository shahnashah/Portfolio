'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (!isMounted) {
    return null; // Prevents server-client mismatch
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-900 to-black text-gray-500">
      <div className="h-20 px-5 md:px-20 flex items-center justify-between">
        <Link href={"/"} className="text-3xl md:text-4xl font-bold italic text-gray-500">
          <span className="text-violet-500">&lt;</span> Shahna{" "}
          <span className="text-pink-500">&gt;</span>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleDrawer} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center gap-10 text-2xl font-semibold text-gray-500 italic">
          <Link href={"/about"}>About</Link>
          <Link href={"/skills"}>Skills</Link>
          <Link href={"/experience"}>Journey</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 text-2xl font-semibold text-gray-500 italic">
          <div className="flex flex-col gap-8">
            <Link href={"/about"} onClick={toggleDrawer}>About</Link>
            <Link href={"/skills"} onClick={toggleDrawer}>Skills</Link>
            <Link href={"/experience"} onClick={toggleDrawer}>Journey</Link>
            <Link href={"/projects"} onClick={toggleDrawer}>Projects</Link>
            <Link href={"/contact"} onClick={toggleDrawer}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
