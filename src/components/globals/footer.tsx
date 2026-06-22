"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import certificate1 from "@/assets/services-icons/certificate1.png";
import certificate2 from "@/assets/services-icons/certificate2.png";
import certificate3 from "@/assets/services-icons/certificate3.png";
import certificate4 from "@/assets/services-icons/certificate4.png";
import certificate5 from "@/assets/services-icons/certificate5.png";

const certificates: StaticImageData[] = [
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
];

const footerNavOptions = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "mailto:mktg@atisunyainfotech.com" },
  { name: "About Us", path: "/about-us" },
];

const offices = [
  {
    name: "Noida Office",
    address: ["A-522, Tower-A, Logix Technova", "Sector-132, Noida - 201309", "Uttar Pradesh, India"],
  },
  {
    name: "Hyderabad Office",
    address: ["Innov8, 7th Floor", "Vasavi Sky City", "Telecom Nagar, Gachibowli", "Hyderabad - 500032", "Telangana, India"],
  },
  {
    name: "USA Office",
    address: ["101 Hampshire Drive", "Plainsboro Township, New Jersey 08536", "United States"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white">
      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-5 tracking-wide">
              <span className="text-yellow-400">AtiSunya</span> Infotech
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering{" "}
              <span className="text-white font-medium">ERP Excellence</span>,
              integration strategy, and enterprise-grade digital transformation
              solutions engineered for scalable growth.
            </p>
          </div>

          <div>
            <h5 className="text-xl uppercase tracking-[2px] mb-6 text-[#fbc02d]">
              Navigation
            </h5>

            <ul className="space-y-3 text-sm text-gray-400">
              {footerNavOptions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="hover:text-yellow-400 transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xl uppercase tracking-[2px] mb-6 text-[#fbc02d]">
              Contact
            </h5>

            <div className="space-y-4 text-sm text-gray-400">
              <a
                href="tel:+919021023513"
                className="block hover:text-yellow-400 transition font-medium"
              >
                Phone: <b>+91 90210 23513</b>
              </a>
              <a
                href="tel:+917396453199"
                className="block hover:text-yellow-400 transition font-medium"
              >
                Phone: <b>+91 73964 53199</b>
              </a>
              <a
                href="mailto:mktg@atisunyainfotech.com"
                className="block hover:text-yellow-400 transition font-medium"
              >
                Email: <b>mktg@atisunyainfotech.com</b>
              </a>
              <a
                href="mailto:info@atisunya.co"
                className="block hover:text-yellow-400 transition font-medium"
              >
                Email: info@atisunya.co
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xl uppercase tracking-[2px] mb-6 text-[#fbc02d]">
              Offices
            </h5>

            <div className="space-y-5 text-sm text-gray-400">
              {offices.map((office) => (
                <div key={office.name}>
                  <h6 className="text-yellow-400 font-semibold mb-1">
                    {office.name}
                  </h6>
                  <p className="leading-relaxed">
                    {office.address.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 mb-8">
          <h5 className="text-xl uppercase tracking-[2px] mb-6 text-[#fbc02d]">
            Certifications
          </h5>

          <div className="flex flex-wrap gap-6 items-center">
            {certificates.map((cert, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 opacity-0 blur-md group-hover:opacity-60 transition-all duration-500 z-0" />

                <div className="relative z-10 w-10 h-10 lg:w-18 lg:h-18 bg-white rounded-full overflow-hidden border border-gray-200 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400 group-hover:shadow-[0_0_25px_rgba(250,204,21,0.4)]">
                  <Image
                    src={cert}
                    alt="Certificate"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 my-10" />

        <div className="grid md:grid-cols-2 items-center gap-6">
          <div className="text-xs text-gray-500 text-center md:text-left">
            <span className="text-white font-medium">
              © 2026 AtiSunya Infotech Pvt Ltd All Rights Reserved.
            </span>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            {[
              {
                href: "https://www.linkedin.com/company/atisunya-infotech-private-limited/",
                src: "/Linkedln.png",
              },
              {
                href: "https://www.instagram.com/atisunyainfotech/",
                src: "/Instgram.jpg",
              },
              {
                href: "https://wa.me/919021023513",
                src: "/Watsapp (1).png",
              },
              {
                href: "mailto:mktg@atisunyainfotech.com",
                src: "/Gmail.png",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full overflow-hidden border border-gray-600 hover:border-yellow-400 transition duration-300 hover:scale-110"
              >
                <Image
                  src={item.src}
                  alt="social"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
