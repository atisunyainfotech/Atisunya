
import Image, { StaticImageData } from "next/image";
import AthleticLogo from "@/assets/brand-logos/athletic.webp"
import BurleighLogo from "@/assets/brand-logos/burleigh.webp"
import BuzzballLogo from "@/assets/brand-logos/buzzball.webp";
import ColoradoLogo from "@/assets/brand-logos/colorado.webp";
import CraftLogo from "@/assets/brand-logos/craft.webp";
import ExclusiveResortsLogo from "@/assets/brand-logos/exclusive-resorts.webp";
import FarNienteLogo from "@/assets/brand-logos/far-niente.webp";
import FerrandLogo from "@/assets/brand-logos/ferrand.webp";
import HenhouseLogo from "@/assets/brand-logos/henhouse.webp";
import ImperialLogo from "@/assets/brand-logos/imperial.webp";
import LightdeckLogo from "@/assets/brand-logos/lightdeck.webp";
import PernodLogo from "@/assets/brand-logos/pernod.webp";
import RemedyLogo from "@/assets/brand-logos/remedy.webp";
import SurfsideLogo from "@/assets/brand-logos/surfside.webp";
import TheVinesLogo from "@/assets/brand-logos/thevines.webp";
import TyrerellsLogo from "@/assets/brand-logos/tyrerells.webp";

const BrandLogos = () => {

  const images = [
    AthleticLogo,
    BurleighLogo,
    BuzzballLogo,
    ColoradoLogo,
    CraftLogo,
    ExclusiveResortsLogo,
    FarNienteLogo,
    FerrandLogo,
    HenhouseLogo,
    ImperialLogo,
    LightdeckLogo,
    PernodLogo,
    RemedyLogo,
    SurfsideLogo,
    TheVinesLogo,
    TyrerellsLogo,
  ]
  return (
    <section className="container flex flex-col items-center gap-10 py-24">
      <h2 className="text-center text-4xl font-semibold leading-8 font-primary text-blue">
        Some of our recent <span className="text-yellow">success stories</span>
      </h2>
      <div className="flex flex-wrap gap-x-10 gap-y-10 mt-10 justify-center items-center">
        {
          images.map((image, index) => <SocialProofLogo image={image} key={index} />)
        }
      </div>
    </section>
  )
}

export default BrandLogos;


interface SocialProofLogoProps {
  image: StaticImageData;
}

export function SocialProofLogo({ image }: SocialProofLogoProps) {
  return (
    <div className={"relative w-40 h-20 md:w-72 md:h-24 transition duration-500 hover:scale-110"}>
      <Image src={image} alt="Company Logo" fill className="object-contain" />
    </div>
  );
}
  