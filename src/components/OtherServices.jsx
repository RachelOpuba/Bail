import imgref from "./imgref";
import { FaArrowRightLong } from "react-icons/fa6";

const otherServiceList = [
  {
    title: "NDT Inspection for all Equipments",
    desc: "Comprehensive non-destructive testing for pipelines, vessels, pumps, compressors, and more.",
    imgSrc: imgref.ndt02,
  },
  {
    title: "RBI, FFS, RCM Assessments",
    desc: "Risk-based inspection, fitness-for-service, and reliability-centered maintenance assessments.",
    imgSrc: imgref.assessment,
  },
  {
    title: "Turnaround & Shutdown Support",
    desc: "Expert planning and execution of maintenance activities during shutdowns.",
    imgSrc: imgref.turnaround,
  },
];
function OtherServices() {
  return (
    <div className="w-full mb-20 px-4 mt-30">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="w-full flex flex-col">
          <h3 className="pb-10 text-3xl md:text-5xl text-[#333] font-[300] tracking-tight">
            Other Services
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-10">
            {otherServiceList.map((service) => (
              <div
                key={service.title}
                className="shadow-xl  rounded-lg"
              >
                <div className="relative h-[300px]  pt-10 lg:pt-0 mb-5">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="absolute w-full h-full object-cover bg-center bg-no-repeat"
                    // style={{ objectPosition: "left top" }}
                  />
                </div>
                <div className="  flex flex-col pb-10 mt-14 md:mt-10 lg:mt-0">
                  <div className="px-4 ">
                    <h3 className="text-lg py-4 font-medium">
                      {service.title}
                    </h3>
                    <p>{service.desc}</p>
                  </div>
                  <a href={`mailto:info@broadassetingrity.com`}>
                    <div className="flex items-center gap-2 text-[#d5000a] font-medium ps-4 my-5">
                      <button>Explore our solutions</button>
                      <FaArrowRightLong className="text-lg pt-1" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherServices;
