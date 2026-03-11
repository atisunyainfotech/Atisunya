
import Image, { StaticImageData } from "next/image";
import ADBCLogo from "@/assets/brand-logos/ADBC.jpg"
import AlfahhadLogo from "@/assets/brand-logos/alfahhad holding group.png"
import BHAGWATILogo from "@/assets/brand-logos/BHAGWATI.png";
import BharatLogo from "@/assets/brand-logos/Bharat.png";
import brownbitesLogo from "@/assets/brand-logos/brown bites.jpg";
import CharteredLogo from "@/assets/brand-logos/Chartered Accountant.png";
import daikinLogo from "@/assets/brand-logos/daikin.png";
import DUBAILogo from "@/assets/brand-logos/DUBAIPOLICE.png";
import GOLOBALLogo from "@/assets/brand-logos/global knowledge.png";
import GRANDLogo from "@/assets/brand-logos/grandmaster.jpg";


const BrandLogos = () => {

  const images = [
 ADBCLogo ,
 AlfahhadLogo ,
 BHAGWATILogo ,
 BharatLogo ,
 brownbitesLogo ,
 CharteredLogo ,
 daikinLogo ,
 DUBAILogo ,
 GOLOBALLogo ,
 GRANDLogo, 
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
  