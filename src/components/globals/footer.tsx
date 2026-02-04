import Image from "next/image";
import Link from "next/link";

import oracleIcon from "@/assets/services-icons/oracle.jpg";
import MicrosoftIcon from "@/assets/services-icons/microsoft-dynamic.jpg";
import ZohoIcon from "@/assets/services-icons/zoho.png";
import CeligoIcon from "@/assets/services-icons/celigo.png";
import SalesforceIcon from "@/assets/services-icons/salesforce.png";



const Footer = () => {
  return (
    <footer className="bg-blue text-white py-10">
      <div className="container flex max-md:flex-col justify-between gap-10">

        {/* Quick Links */}
        <div>
          <h5 className="text-2xl font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow">Home</Link></li>
            <li><Link href="#services" className="hover:text-yellow">Services</Link></li>
            <li><Link href="#solutions" className="hover:text-yellow">Solutions</Link></li>
            <li><Link href="/contact-us" className="hover:text-yellow">Contact Us</Link></li>
          </ul>
        </div>


        {/* services icons */}
        <div>
          <h5 className="text-2xl font-semibold mb-4">Services</h5>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-5">
    
          <Image src={ZohoIcon} alt="zoho" width={90} height={70} className="object-contain bg-white " />
          <Image src={CeligoIcon} alt="celigo" width={90} height={70} className="object-contain bg-white" />
          <Image src={MicrosoftIcon} alt="microsoft dynamics" width={90} height={70} className="object-contain bg-white" />
          <Image src={SalesforceIcon} alt="salesforce" width={90} height={70} className="object-contain bg-white" />
          <Image src={oracleIcon} alt="oracle" width={90} height={70} className="object-contain bg-white" />

        </div>
        </div>


        {/* Get In Touch */}
        <div className="shrink-0">
          <h5 className="text-2xl font-semibold mb-4">Get In Touch</h5>

          <div className="space-y-4 text-sm">
            {/* Phone numbers */}
            <div className="flex items-start gap-2">
              <span className="text-yellow text-lg mt-1"></span>
              <div className="flex flex-col gap-y-3">
                {/* <a href="tel:+919975549318" className="hover:underline"> 📞 +91 9975549318 </a> */}
                 <a href="tel:+919975549318" className="hover:underline">📞 +91 9021023513 </a>
                <Link href="mailto:sales@jamisu.com" className="text-sm text-white hover:underline">
                  📧 mktg@atisunyainfotech.com
                </Link>
                <Link href="mailto:pmo@jamisu.com " className="text-sm text-white hover:underline">
                  📧 info@atisunya.co
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section: Address and Social Icons */}
      <div className="container flex flex-col md:flex-row justify-between mt-10 gap-6">
        {/* Address */}
        <div className="grid lg:grid-cols-2 gap-x-6 gap-y-4">
          <div className="text-sm text-white/90 max-w-xs">
            <h5 className="text-yellow text-xl mb-2">📍Noida </h5>
            <p>
              AtiSunya Pvt Ltd 
              <br />
              A-522 , Tower-A,
              Logix Technova,
              Plot No. 04- Block A,
              Sec-132 Noida - 201309
              Uttar Pradesh
              <br />
              INDIA
            </p>
          </div>
          {/* <div className="text-sm text-white/90 max-w-xs">
            <h5 className="text-yellow text-xl mb-2">📍 Noida</h5>
            <p>
              Tower - D, The
              Golden Palm
              Sector - 168,
              <br />
              Noida -
              201304
              <br />
              INDIA
            </p>
          </div> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/atisunyainfotech/?next=%2Fthe_abolis%2F">
            <Image src="/Instgram.jpg" alt="Instagram" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link>
          <Link href="mailto: mktg@atisunyainfotech.com">
            <Image src="/Gmail.png" alt="Email" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link>
          { <Link href="https://www.linkedin.com/company/atisunya-infotech-private-limited/?viewAsMember=true">
            <Image src="/Linkedln.png" alt="LinkedIn" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link> }
          <Link href="https://wa.me/+91 9021023513">
            <Image src="/Watsapp (1).png" alt="WhatsApp" width={40} height={40} className="rounded-full hover:opacity-80" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-sm text-white mt-10 container">
        &copy; 2024 All rights reserved. AtiSunya Infotech Pvt Ltd  
      </p>
    </footer>
  );
};

export default Footer;
