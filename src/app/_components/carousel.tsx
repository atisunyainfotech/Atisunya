"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import OracleNetsuiteLogo from "@/assets/brand-logos/Oracle Netsuite.svg";
import MicrosoftDynamic365Logo from "@/assets/brand-logos/Microsoft Dynamic 365.svg";
import Salesforce from "@/assets/brand-logos/Salesforce.svg";
import SAP from "@/assets/brand-logos/SAP.svg";
import Zoho from "@/assets/brand-logos/Zoho.svg";
import AutoScroll from "embla-carousel-auto-scroll";
import LeftGradient from "@/assets/left-gradient.png";
import RightGradient from "@/assets/right-gradient.png";



const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  }, [AutoScroll({
    speed: 0.8,
    playOnInit: true

  })])

  return (
    <section className="container entities py-14 relative">
      <Image className="absolute left-0 bottom-0 z-10" src={LeftGradient} alt="" width={80} height={204} />
      <Image className="absolute right-0 bottom-0 z-10" src={RightGradient} alt="" width={80} height={204} />
      <div className="embla relative" ref={emblaRef}>

        <div className="embla__container flex items-center gap-x-10 lg:gap-x-20">

          <div className="embla__slide w-44">
            <figure>
              <Image src={OracleNetsuiteLogo } alt="Oracle Netsuite logo" width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={MicrosoftDynamic365Logo} alt="Microsoft Dynamic365 Logo" width={160} />
            </figure>
          </div>

          <div className="embla__slide w-44">
            <figure>
              <Image src={Salesforce} alt="Salesforce " width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={SAP } alt="SAP" width={160} />
            </figure>
          </div>

          <div className="embla__slide w-44">
            <figure>
              <Image src={Zoho} alt="Zoho" width={130} />
            </figure>
          </div>

          
          <div className="embla__slide w-44">
            <figure>
              <Image src={OracleNetsuiteLogo } alt="Oracle Netsuite logo" width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={MicrosoftDynamic365Logo} alt="Microsoft Dynamic365 Logo" width={160} />
            </figure>
          </div>

          <div className="embla__slide w-44">
            <figure>
              <Image src={Salesforce} alt="Salesforce " width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={SAP } alt="SAP" width={160} />
            </figure>
          </div>

          <div className="embla__slide w-44">
            <figure>
              <Image src={Zoho} alt="Zoho" width={130} />
            </figure>
          </div>

        <div className="embla__slide w-44">
            <figure>
              <Image src={OracleNetsuiteLogo } alt="Oracle Netsuite logo" width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={MicrosoftDynamic365Logo} alt="Microsoft Dynamic365 Logo" width={160} />
            </figure>
          </div>

          <div className="embla__slide w-44">
            <figure>
              <Image src={Salesforce} alt="Salesforce " width={130} />
            </figure>
          </div>
          <div className="embla__slide w-44">
            <figure>
              <Image src={SAP } alt="SAP" width={160} />
            </figure>
          </div>

          <div className="embla__slide w-44">
            <figure>
              <Image src={Zoho} alt="Zoho" width={130} />
            </figure>
          </div>

         
        </div>
      </div>

    </section>
  )
}

export default Carousel