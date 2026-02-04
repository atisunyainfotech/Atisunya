
import AIIcon from '@/assets/initiatives/ai.jpeg';
import GoGreen from "@/assets/initiatives/go-green.jpeg";
import NoDrugs from "@/assets/initiatives/no-drugs.jpeg";
import Image from 'next/image';

const Initiatives = () => {

  return (
    <section className='bg-gray/10 py-10'>
      <div className="container">
        <h3 className='text-4xl font-medium text-center'>Our <span className="text-yellow">Initiatives</span></h3>


        <div className='mt-10  grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div
            className='bg-[#ffffff] px-6 py-7 rounded-sm space-y-4 max-w-2xl'>
            <h4 className='text-2xl font-semibold'>Government of India&apos;s Artificial Intelligence</h4>
            <Image
              src={AIIcon} alt={`Government of India&apos;s Artificial Intelligence`}
              width={100} height={100}
              className='object-contain'
            />

            <div className='max-md:text-15 text-gray space-y-2'>
              <p>AtiSunya Infotech actively supports the Government of India&apos;s Artificial Intelligence initiatives by promoting responsible, scalable, and inclusive AI solutions.
              </p>
              <p>
                Through innovation, skill development, and public-private collaboration, we help transform government visions into real-world impact. Our mission is to fuel India&apos;s smart transformation with ethical and accessible AI for all.
              </p>
            </div>
          </div>

          <div
            className='bg-[#ffffff] px-6 py-7 rounded-sm space-y-4 max-w-2xl'>
            <h4 className='text-2xl font-semibold'>UTC Go Green</h4>
            <Image
              src={GoGreen} alt={`UTC Go Green`}
              width={150} height={150}
              className='object-contain'
            />

            <div className='max-md:text-15 text-gray space-y-2'>
              <p>UTC Go Green aligns with the Government of India&apos;s sustainability and green technology initiatives by promoting eco-friendly innovations and digital efficiency.
              </p>
              <p>
                Through smart energy solutions and sustainable practices, we aim to reduce carbon footprints and drive environmental responsibility. Our mission is to empower a cleaner, greener, and smarter future for India.
              </p>
            </div>
          </div>


          <div
            className='bg-[#ffffff] px-6 py-7 rounded-sm space-y-4 max-w-2xl'>
            <h4 className='text-2xl font-semibold'>No to Drugs</h4>
            <Image
              src={NoDrugs} alt={`No to Drugs`}
              width={100} height={100}
              className='object-contain'
            />

            <div className='max-md:text-15 text-gray space-y-2'>
              <p>AtiSunya Infotech stands with the Government of India&apos;s &apos;No to Drugs&apos; initiative, promoting awareness and a healthy, drug-free lifestyle among youth and communities.
              </p>
              <p>
                Through digital campaigns and educational outreach, we spread the message of positivity, wellness, and self-empowerment. Our goal is to inspire a stronger, drug-free India for future generations.
              </p>
            </div>
          </div>



        </div>

      </div>
    </section>
  )
}

export default Initiatives