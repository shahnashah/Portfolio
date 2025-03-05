"use client";
import React from "react";
import Nav from "@/components/Nav";
import Aboutme from "@/components/About"

function page() {
  return (
    <>
    <div className=" flex flex-col gap-10">
      <div className="mb-5">
      <Nav />
      </div>
      <div>
      <Aboutme />
      </div>
    </div>
    </>
  );
}


export default page;
