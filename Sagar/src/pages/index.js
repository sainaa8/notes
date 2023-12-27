import React from "react";
import First_header from "@/components/first-page";
import Images from "@/components/Images";
import SecondPage from "@/components/Second-fage";
import ThirdPage from "@/components/Third-page";
import { FourtPage } from "@/components/Fourth-page";
function Home() {
  return (
    <div>
      <div className="flex mt-20 ">
        <First_header />
      </div>

      <SecondPage />
      <ThirdPage />
      <FourtPage />
    </div>
  );
}

export default Home;
