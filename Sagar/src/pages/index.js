import React from "react";
import First_header from "@/components/first-page";
import Images from "@/components/Images";
import SecondPage from "@/components/Second-fage";
function Home() {
  return (
    <div>
      <div className="flex mt-20 ">
        <First_header />
      </div>

      <SecondPage />
    </div>
  );
}

export default Home;
