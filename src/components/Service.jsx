import { FaArrowRightLong } from 'react-icons/fa6';

function Service({ title, description, imageUrl, link, reverse, objectPosition }) {
  return (
    <div className='w-full'>
      <div className={`w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[720px] lg:min-h-[580px] `}>
        <div className={`relative h-full min-h-[300px] md:min-h-[500px]  lg:pt-0 ${reverse ? "lg:order-1" : "lg:order-last"}`}>
          <img
            src={imageUrl}
            alt={title}
            className="absolute w-full h-full object-cover bg-center bg-no-repeat"
            style={{ objectPosition: objectPosition || "left top" }} // Use the objectPosition prop or default to "left top"
          />
        </div>
        <div className={`bg-[#f1f2f2] h-full flex flex-col pb-20 lg:pb-0 lg:py-20 justify-center p-4 lg:p-0  lg:ps-[14%] ${reverse ? "lg:order-last" : "lg:order-1"}`}>
          <h3 className="text-[#333] font-[300] tracking-[-.03125rem] text-xl md:text-[2rem] lg:pe-4 xl:pe-0">{title}</h3>
          <p className="max-w-[500px] text-[#6d6e71] font-[300] leading-[1.75rem] py-5">{description}</p>
          <a href={`mailto:${link}`}>
            <div className="flex items-center gap-2 text-[#d5000a] font-medium">
              <button>Explore our solutions</button>
              <FaArrowRightLong className="text-lg pt-1" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
