import imgref from './imgref'
import Values from './Values'

function AboutUs() {
  return (
    <div className="w-full">
        <div className="relative w-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px] pt-10 lg:pt-0">
          <img
            src={imgref.heatExchanger02}
            alt="Heat exchanger"
            className="absolute inset-0 w-full h-full object-cover  bg-no-repeat"
            style={{ objectPosition: "center center" }}
          />
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
          <div className="absolute bottom-[10%] md:bottom-[30%] left-[3%] xl:left-[10% ] z-10 max-w-[1920px] mx-auto">
            <div className="ps-2 md:ps-10 xl:ps-20 text-white">
              <h2 className="text-lg  pb-4 uppercase font-me">
                About us
              </h2>
              <p className=" text-3xl md:text-5xl">
              Who we are
              </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center py-10 lg:py-20 px-4 z-50'>
            <div className='w-full max-w-[800px] px-4'>
                <p className='text-2xl lg:text-4xl pt-4  tracking-[-.03125rem] text-[#333] leading-[2rem] lg:leading-[2.5rem]'>Ensuring optimal performance and efficiency </p>
                <p className='py-8 text-[#6d6e71]   text-base lg:text-lg leading-6'>Founded by industry experts passionate about solving the complex challenges of heat exchanger maintenance, BAIL is a Nigerian company committed to delivering world-class services. We not only meet international standards but also prioritize local content development and sustainability. </p>
                <p className='text-[#6d6e71]   text-base lg:text-lg leading-6'>Our experienced team offers 24/7 support and tailored solutions to optimize your heat exchanger performance, ensuring maximum uptime and efficiency. We value long-term partnerships and are dedicated to helping you achieve your operational and financial goals.</p>

            </div>

           

        </div>

        <Values/>

    </div>
  )
}

export default AboutUs