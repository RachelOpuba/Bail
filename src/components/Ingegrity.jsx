import imgref from "./imgref";

function Ingegrity() {
  return (
    <>
      <main className="w-full bg-[#f3f5fc] h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1320px] mx-auto py-20 px-4 gap-8 items-center">
          <div className="relative h-full min-h-[300px] md:min-h-[450px] pt-10 lg:pt-0">
            <img
              src={imgref.ndt}
              alt="Heat exchanger"
              className="absolute  w-full h-full  object-cover bg-center bg-no-repeat rounded"
              style={{ objectPosition: 'center top' }}

            />
          </div>
          <div className="flex flex-col ps-0 lg:ps-4">
            <h1 className="text-[32px] md:text-[32px] xl:text-5xl font-semibold leading-[38px] md:leading-[42px] xl:leading-[58px] pb-4 xl:pb-6 tracking-tighter text-center lg:text-start w-full pt-10 lg:pt-0">
              Comprehensive Asset Integrity Management Solutions{" "}
            </h1>

            <div>
              <p className="text-lg text-gray-500 font-medium  leading-[28px] pb-6 text-justify p-4">
                {" "}
                Beyond heat exchangers, BAIL offers a full suite of asset
                integrity management services to safeguard your critical
                equipment and infrastructure. We leverage advanced NDT
                techniques, FFS, RBI and data-driven insights to optimize
                maintenance strategies, prevent failures, and extend the
                lifespan of your assets.{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Ingegrity;
