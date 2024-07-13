import { useState, useEffect } from "react";
import imgref from "./imgref";

const images = [imgref.repair, imgref.cleaning, imgref.inspection];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="w-full bg-[#f3f5fc] h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1320px] mx-auto py-0  lg:py-24 px-0 lg:px-6 gap-6 xl:gap-4 items-center">
          <div className="flex flex-col order-last lg:order-1 py-10 lg:py-0">
            <h1 className="text-[32px] md:text-[40px] xl:text-5xl font-semibold leading-[46px] xl:leading-[58px] pb-6 tracking-tighter text-center lg:text-start w-full">
              Your trusted partner for <br className="hidden md:block" />
              Heat Exchanger maintenance{" "}
            </h1>
            <div>
              <p
                style={{ fontSize: "calc(17px + 6*((100vw - 375px)/1545))" }}
                className="text-gray-500 font-medium w-full text-justify leading-[1.5em] pb-6 px-4 pe-4 pe-xl:pe-4 lg:pe-0 "
              >
                We are your one-stop shop for heat exchanger solutions in
                Nigeria. We specialize in cleaning, inspection, maintenance, and
                repair services for the oil & gas and process industries.{" "}
              </p>
            </div>

            <div className="mt-5 self-center lg:self-start ">
              <a href="mailto:info@broadassetingrity.com">
                <button
                  className="bg-[#3455e2] text-white rounded-[48px] p-3 font-medium "
                  style={{ minWidth: "calc(180px + 4vw)" }}
                >
                  Request a Demo
                </button>
              </a>
            </div>
          </div>
          <div className="relative h-full min-h-[300px] md:min-h-[450px]  xl:min-h-[500px] pt-0 order-1 lg:order-last">
            <img
              src={images[currentImageIndex]}
              alt="Heat exchanger"
              className="absolute  w-full h-full  object-cover bg-center bg-no-repeat rounded"
              style={{ objectPosition: "left top" }}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
