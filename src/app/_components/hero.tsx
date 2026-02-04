import HeroImage from "@/assets/jamaisu-hero.jpg";
import Image from "next/image";
import WordAnimation from "./word-animation";
import Link from "next/link";

const Hero = () => {


  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="container h-full flex items-center">

        <Image src={HeroImage} alt="" layout="fill" className="object-cover brightness-50" />
        <div className="-translate-y-10 text-white">
          <h1 className="text-3xl md:text-3xl lg:text-5xl leading-[130%] lg:leading-[125%] font-semibold flex flex-wrap gap-2  max-w-md lg:max-w-2xl">
          Helping Businesses scale with our expertise in
            <WordAnimation />
          </h1>

          <p className="mt-8 lg:text-lg max-w-lg text-[#EFEFEF]">
            Helping business owners & leaders follow a proven process to build a more valuable business - so you can live the life you&apos;ve always dreamed of.
          </p>

          <div className="mt-5">
            <Link href={"/contact-us"} className="text-blue bg-yellow px-4 py-2 font-medium rounded-md">
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
