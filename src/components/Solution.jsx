import { SiSpeedtest } from "react-icons/si";
import { FcInspection } from "react-icons/fc";
import { GiAutoRepair } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { MdOutlineEngineering } from "react-icons/md";
import { GrRisk } from "react-icons/gr";








const solutions = [
  {
    title: "Heat Exchanger Cleaning and Descaling",
    desc: "We utilize advanced cleaning techniques ( mechanical and chemical) to remove fouling and deposits, restoring heat transfer efficiency and reducing energy consumption.",
    icon: <GrVmMaintenance className="text-blue-500 text-5xl mb-5"/>
  },
  {
    title: "Heat Exchanger Inspection and Testing",
    desc: "Our certified inspectors use state-of-the-art NDT equipment to identify potential issues (corrosion, leaks, tube damage) before they cause costly failures.",
    icon: <SiSpeedtest className="text-blue-500 text-5xl mb-5"/>
  },
  {
    title: " Heat Exchanger Maintainance and Repair",
    desc: "We provide comprehensive maintenance programs and expert repair services to ensure optimal performance and extend the lifespan of your heat exchangers.",
    icon: <GiAutoRepair className="text-blue-500 text-5xl mb-5"/>
  },
 
  {
    title: "NDT inspection for Fixed & Rotating Equipment",
    desc: "Comprehensive non-destructive testing for pipelines, vessels, pumps, compressors, and more.",
    icon: <FcInspection className="text-blue-500 text-5xl mb-5"/>
  },
  {
    title: "RBI, FFS, RCM Assessments",
    desc: "Risk-based inspection, fitness-for-service, and reliability-centered maintenance assessments to optimize your maintenance strategies.",
    icon: <GrRisk className="text-blue-500 text-5xl mb-5"/>
  },
  {
    title: "Turnaround & Shutdown Support",
    desc: "Expert planning and execution of maintenance activities during shutdowns.",
    icon: <MdOutlineEngineering className="text-blue-500 text-5xl mb-5"/>
  },
];
function Solution() {
  return (
    <div className="bg-[#f6f6f6] w-full mx-auto max-w-[1320px] rounded-xl p-10 flex flex-col my-20">
      <h3 className="text-[32px] md:text-5xl font-bold">Our Solutions</h3>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 xl:gap-x-8 gap-y-16">
        {solutions.map((solution) => (
          <div key={solution.title} className="">
            <div className="bg-white shadow-lg px-8 py-12 xl:py-14 rounded-lg flex flex-col justify-between  h-full  min-h-[420px]">
                <div className="w-full flex justify-end">
                    {solution.icon}
                </div>
              <h4 className="font-semibold text-2xl ">{solution.title}</h4>
              <p className="py-4 text-[#979797] font-medium leading-[26px] text-justify">{solution.desc}</p>
              <div className="self-center w-full max-w-[200px] pt-5">
                <a href="mailto:ogbenirach@gmail.com">
                  <button
                    className="bg-[#3455e2] text-white rounded-[48px] p-3 font-medium w-full "
                    
                  >
                   Get started
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
