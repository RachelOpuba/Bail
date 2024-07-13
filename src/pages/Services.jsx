import imgref from "../components/imgref";
import OtherServices from "../components/OtherServices";
import ServiceList from "../components/ServiceList";
import WhatWeDo from "../components/WhatWeDo";
import HomeLayout from "../Layout";

function Services() {
  return (
    <HomeLayout>
      <div className="w-full">
        <div className="relative w-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px] pt-10 lg:pt-0">
          <img
            src={imgref.turnaround}
            alt="Heat exchanger"
            className="absolute inset-0 w-full h-full object-cover  bg-no-repeat"
            style={{ objectPosition: "80% top" }}
          />
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="absolute bottom-[10%] md:bottom-[30%] left-[3%] xl:left-[10% ] z-10 max-w-[1920px] mx-auto">
            <div className="ps-2 md:ps-10 xl:ps-20 text-white">
              <h2 className=" text-3xl md:text-5xl pb-4">
                Our Services
              </h2>
              <p className="text-lg">
              Providing heat exchanger maintenance and asset integrity management solutions
              </p>
            </div>
          </div>
        </div>
       
          <WhatWeDo/>
          <ServiceList/>
          <OtherServices/>
      
      </div>
    </HomeLayout>
  );
}

export default Services;
