import React from "react";
import First_header from "@/components/first-page";
import Images from "@/components/Images";
import SecondPage from "@/components/Second-fage";
import ThirdPage from "@/components/Third-page";
import { FourtPage } from "@/components/Fourth-page";
import LastPage from "@/components/fifth-page";
import Address from "@/components/Last-page";
import { Adag } from "@/components/fuckk";
function Home() {
  return (
    <div>
      <div className="flex mt-20 ">
        <First_header />
      </div>
      
      <SecondPage />
      <ThirdPage />
      <FourtPage />
      <LastPage />
      <Address />
      <Adag />
    </div>
  );
}

export default Home;
