import { ContainerScreen } from "@/components/ContainerScreen";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ScreenView } from "@/components/ScreenView";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col justify-center items-center md:flex-col">
          <ContainerScreen />
        </div>
      </MaxWidthWrapper>

      <section id="service">
        <ScreenView />
      </section>
      
      <MaxWidthWrapper>
        <div className="w-full relative pt-20 pb-10  text-center md:pt-40 md:pb-20">
          <span>Copyright © 2024 Part of DOSA LTD</span>
        </div>
      </MaxWidthWrapper>
      
    </>
  );
}

export default ServicePage;
