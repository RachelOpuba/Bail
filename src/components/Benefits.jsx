import { BsCheckCircle } from "react-icons/bs";

function Benefits() {
  return (
    <>
        <div
        className='w-full bg-white  py-10 my-10'>
            <div className='max-w-[1320px] grid grid-cols-1 md:grid-cols-3 mx-auto  place-content-start md:place-items-center  gap-8 ps-5'>

            <div className='flex items-center gap-4'>
                <BsCheckCircle className="text-blue-500 text-3xl"/>
                <h3 className="font-bold text-[20px] md:text-lg lg:text-[24px] ">Reduce outages</h3>
            </div>
            <div className='flex items-center gap-4'>
                <BsCheckCircle className="text-blue-500 text-3xl"/>
                <h3 className="font-bold text-[20px] md:text-lg lg:text-[24px]">Increase efficiency</h3>
            </div>
            <div className='flex items-center gap-4'>
                <BsCheckCircle className="text-blue-500 text-3xl"/>
                <h3 className="font-bold text-[20px] md:text-lg lg:text-[24px]">Maximize life-span</h3>

            </div>
            </div>
        </div>
    </>
  )
}

export default Benefits