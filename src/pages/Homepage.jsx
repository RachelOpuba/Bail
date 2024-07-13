import HomeLayout from '../Layout'
import Benefits from '../components/Benefits'
import Hero from '../components/Hero'
import Ingegrity from '../components/Ingegrity'
import Solution from '../components/Solution'

function Homepage() {
  return (
    <HomeLayout>
        <div className='w-full '>
            <Hero/>
            <Benefits/>
            <Ingegrity/>
            <Solution/>
        </div>
    </HomeLayout>
  )
}

export default Homepage