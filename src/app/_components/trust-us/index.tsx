import Tag from "@/components/globals/Tag"
import Image from "next/image";
import TrustUsImage from "@/assets/trustus.webp";

import FreedomIcon from "@/assets/icons/freedom-icon.svg";
import PeaceIcon from "@/assets/icons/peace-icon.svg";
import ConfidenceIcon from "@/assets/icons/confidence-icon.svg";


const TrustUs = () => {

  const cardsData = [
    {
      id: 1,
      title: 'Self-assurance',
      description: 'To grow your business with clarity and control, stick to a tried-and-true method. ',
      icon: ConfidenceIcon
    },
    {
      id: 2,
      title: 'Calm',
      description: 'Operate with the knowledge that your company is robust, flexible, and prepared to prosper in any market environment',
      icon: PeaceIcon
    },
    {
      id: 3,
      title: 'Financial Independence',
      description: 'Create a prosperous and sustainable future for yourself and your family without being constrained by daily obstacles',
      icon: FreedomIcon
    }
  ]

  return (
    <section className="bg-background-gray py-20">
      <div className="container">
        <div className="flex flex-col gap-y-5 items-center">
          <figure className="w-[330px] h-[220px] relative">
            <Image
              src={TrustUsImage}
              layout="fill"
              className="object-cover"
              alt="trust us image"
            />
          </figure>
          <Tag text="Trust Us" variant="orange" />
          <h3 className="text-2xl lg:text-3xl max-w-sm text-center font-medium">Get More of What You Want From Your Business</h3>
          <p className="max-w-xl text-center text-[15px] leading-[120%] text-gray">Increase Your Business&apos;s Capabilities to Deliver on Your Goals solutions—Oracle NetSuite, Microsoft Dynamics 365, Salesforce, and Zoho—that use a results-oriented approach to assist you in achieving more than just operational efficiency. We assist you in gaining independence, stability, and growth. </p>
        </div>

        <div className="flex max-lg:flex-col mt-6 lg:mt-10 max-lg:items-center justify-between gap-5">
          {
            cardsData.map((card, index) => (
              <article 
                key={card.id} 
                className={`md:max-w-[332px] px-5 md:px-8 text-center bg-white py-10 
                  flex flex-col justify-center items-center gap-y-4 rounded-sm 
                  ${index !== 1 ? 'lg:-translate-y-30' : 'translate-y-0'}
                `}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={52} height={52}
                />

                <h4 className="text-lg font-medium">{card.title}</h4>
                <p className="text-gray">{card.description}</p>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default TrustUs