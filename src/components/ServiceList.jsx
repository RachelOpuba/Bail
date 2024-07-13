import imgref from "./imgref"
import Service from "./Service"

function ServiceList() {
  return (
    <div className='w-full mb-20'>
        <Service
        title="Heat Exchanger Cleaning & Descaling"
        description="We utilize advanced cleaning techniques (chemical and mechanical) to remove fouling and deposits, restoring heat transfer efficiency and reducing energy consumption." 
        imageUrl={imgref.inspection01}
        link="info@broadassetingrity.com"
        reverse={false}
        objectPosition={"center center"}
      />
      <Service
        title="Heat Exchanger Inspection & Testing"
        description="Our certified inspectors use state-of-the-art NDT equipment to identify potential issues (corrosion, leaks, tube damage) before they cause costly failures."
        imageUrl={imgref.ndt}
        link="contact@anotherdomain.com"
        reverse={true} 
        objectPosition={"55%"}
      />
      <Service
        title="Heat Exchanger Maintenance & Repair"
        description="We provide comprehensive maintenance programs and expert repair services to ensure optimal performance and extend the lifespan of your heat exchangers."
        imageUrl={imgref.turnaround01}
        link="contact@anotherdomain.com"
        reverse={false} 
        objectPosition={"center"}
      />
      <Service
        title="Heat Exchanger Performance Optimization"
        description="Our engineers analyze your heat exchanger data to identify inefficiencies and recommend solutions for improved performance and energy savings."
        imageUrl={imgref.rbi2}
        link="contact@anotherdomain.com"
        reverse={true} 
        objectPosition={"left center"}
      />
    </div>
  )
}

export default ServiceList