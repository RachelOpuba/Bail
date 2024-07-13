import imgref from "./imgref";

const valuesList = [
  {title: "Acting with integrity", desc: "We are trustworthy and reliable."},
  {title: "Owning and Delivering", desc: "We take ownership, responsibility and strive for success."},
  {title: "Behaving innovatively", desc: "We are agile, curious and keep growing."},
  {title: "Playing as a team", desc: "We are attentive, inspire, have fun and celebrate our successes."},
]

function Values() {
  return (
    <div className="w-full">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1320px] px-4 md:px-8 mb-20 gap-4 xl:gap-10 py-0 lg:py-10">
        <div className="relative h-[400px] lg:h-[560px]  pt-10 lg:pt-0">
          <img
            src={imgref.shutdown}
            alt="happy employees"
            className="absolute w-full h-full object-cover bg-center bg-no-repeat rounded-lg"
            // style={{ objectPosition: "left top" }}
          />
        </div>
        <div className="flex flex-col justify-between ps-0 lg:ps-10 mt-10 lg:mt-0 gap-10 lg:gap-0">
          {valuesList.map((value)=>(
            <div key={value.title}>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#222222] tracking-tighter pb-2 lg:pb-3">{value.title}</h3>
              <p className="text-lg text-[#979797]">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Values;
