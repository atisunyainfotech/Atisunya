/**
import Image from "next/image";
import ServiceIcon from "@/assets/service-icon.svg";
import SupportIcon from "@/assets/support-icon.svg";

const IconCards = () => {

  return (
    <section className="container pt-14">
    <div className="grid gap-x-10 mt-7 gap-y-10 md:grid-cols-2 max-w-5xl mx-auto">
      <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm">
        <div className="p-6 flex flex-col gap-4">
          <div className="relative">
            <Image alt="Image" src={ServiceIcon} height={120} width={120} className="object-contain" />
          </div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight mt-2">
            NetSuite Services
          </h3>
          <p className="text-15 text-gray-600 font-secondary">
            Our NetSuite Services help businesses streamline operations, boost efficiency, and scale with confidence. We offer end-to-end solutions including implementation, customization, integration, training, and ongoing support. With certified experts and a tailored approach, we ensure your NetSuite ERP works seamlessly for your unique needs—empowering smarter decisions, improved visibility, and long-term growth. Simplify success with our trusted NetSuite solutions.
          </p>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm">
        <div className="p-6 flex flex-col gap-4">
          <div className="relative">
            <Image alt="Image" src={SupportIcon} height={120} width={120} className="object-contain" />
          </div>
          <h3 className="text-2xl font-semibold leading-none tracking-tight mt-2">
            NetSuite Support
          </h3>
          <p className="text-15 text-gray-600 font-secondary">
            Our NetSuite Support services ensure your ERP system runs smoothly and efficiently, every step of the way. From troubleshooting and performance tuning to user training and enhancements, our certified experts provide responsive, reliable assistance tailored to your needs. We help you resolve issues faster, optimize performance, and maximize the value of your NetSuite investment.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default IconCards
 */
