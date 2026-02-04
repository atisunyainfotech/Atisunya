

import Image from "next/image";
import ERPImplementationImage from "@/assets/services/erp-implementation.jpg"
import ERPIntegrationImage from "@/assets/services/erp-integration.jpg"
import ManagedServicesImage from "@/assets/services/managed-servicecs.jpg"
import styles from "./styles.module.css"
import Link from "next/link";


const OurServices = () => {
  const cardClass = `relative min-h-30 md:min-h-[300px] rounded-sm overflow-hidden p-4 flex flex-col h-full justify-between ${styles.serviceCard}`
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="space-y-5 w-full max-w-xl">
          <h3 className="text-7xl font-medium tracking-tight font-primary">Our Services</h3>
          <p className="text-gray-600 ml-auto text-lg font-secondary">
            When it comes to growing a business, most entrepreneurs tend to get stuck at a certain point and become frustrated, as they don&apos;t know what to do or how to fix it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 mt-14 gap-y-5">
          {/* ERP Implementation  */}
          <article className={cardClass}>
            <h4 className="font-semibold text-4xl">ERP <br /> Implementation</h4>
            <p className="text-white px-2 py-3 min-h-72 text-lg transition duration-400 bg-yellow">
              Expert ERP implementation across Microsoft Dynamics 365, Salesforce, Zoho, and Oracle NetSuite is provided by Jamisu Tech. For businesses to succeed in the cutthroat digital age of today, we guarantee smooth integration, data migration, and tailored solutions that optimize processes, boost output, and spur company expansion
            </p>

            <Image src={ERPImplementationImage} layout="fill" alt="erp implemenation" className="object-cover -z-10 transition" />

            <PlusIcon />

          </article>

          {/* ERP Integration */}

          <article className={cardClass}>
            <h4 className=" font-semibold text-4xl">ERP <br /> Integration</h4>
            <p className="text-white px-2 py-3 min-h-72 text-lg transition duration-400 bg-yellow">
              Oracle NetSuite, Salesforce, Zoho, and Microsoft Dynamics 365 can all be seamlessly integrated with your current systems using Jamisu Tech. Our professional methodology guarantees seamless data flow, increased productivity, and real-time insights, enabling companies to attain operational excellence and make more informed decisions.
            </p>
            <Image src={ERPIntegrationImage} layout="fill" alt="erp implemenation" className="object-cover -z-20 transition" />

            <PlusIcon />

          </article>

          {/* Managed Services */}
          <article className={cardClass}>
            <h4 className="font-semibold text-4xl">Managed <br /> Services</h4>
            <p className="text-white px-2 py-3 min-h-72 text-lg transition duration-400 bg-yellow">
              AtiSunya Infotech offers all-inclusive Managed Services to maintain optimal performance for your ERP systems, including Microsoft Dynamics 365, Salesforce, Zoho, and Oracle NetSuite. From proactive maintenance and monitoring to system optimization and user assistance, we make sure your company runs smoothly and maintains its lead in a changing market.
            </p>
            <Image src={ManagedServicesImage} layout="fill" alt="erp implemenation" className="object-cover -z-20 transition" />

            <PlusIcon />
          </article>
        </div>
        <div className="mt-5 flex justify-center">
          <Link href={"/contact-us"} className="text-blue font-medium bg-yellow px-4 py-2 rounded-md">
            Book a call
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OurServices


const PlusIcon = () => {
  return (
    <div className="min-md:hidden absolute bottom-5 right-5 w-12 bg-white rounded-full">
      <svg aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2">
        </path>
      </svg>
    </div>
  )
}