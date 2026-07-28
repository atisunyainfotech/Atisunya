"use client";

import { MouseEvent, RefObject, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import PinIcon from "@/assets/icons/location-pin.svg";
import WhatsappIcon from "@/assets/icons/chat-on-whatsapp.svg";
import ContactForm from "@/components/globals/contact-form";

export default function ContactUsPage() {

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>,
    ref: RefObject<HTMLDivElement | null>
  ) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (ref: RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;

    ref.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const cardRef3 = useRef<HTMLDivElement>(null);
  const cardRef4 = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-gradient-to-br from-[#eef2f7] to-[#ffffff] py-10">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#002050]">
            Get in Touch
          </h1>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Connect with our experts to explore enterprise ERP solutions,
            digital transformation, and business consulting.
          </p>

        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14 [perspective:1200px]">

          {/* Contact Info */}
          <div
            ref={cardRef1}
            onMouseMove={(e) => handleMouseMove(e, cardRef1)}
            onMouseLeave={() => handleMouseLeave(cardRef1)}
            className="transition-all duration-500 rounded-2xl p-7 
            bg-white border border-[#fbc02d]/40 
            shadow-[0_16px_40px_rgba(0,32,80,0.08)] ring-1 ring-transparent hover:shadow-[0_28px_70px_rgba(0,32,80,0.16)] hover:border-[#fbc02d] hover:ring-[#fbc02d]/25"
          >
            <h3 className="text-xl font-semibold text-[#002050] mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700">

              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <Link href="tel:+919021023513" className="hover:text-[#002050]">
                  +91 9021023513
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <Link href="mailto:mktg@atisunyainfotech.com">
                  mktg@atisunyainfotech.com
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <Link href="mailto:info@atisunya.co">
                  info@atisunya.co
                </Link>
              </div>

            </div>

            <Link href="https://wa.me/+919021023513">
              <Image
                src={WhatsappIcon}
                alt="Chat on WhatsApp"
                width={160}
                className="mt-6 hover:scale-105 transition"
              />
            </Link>
          </div>

          {/* India Office */}
          <div
            ref={cardRef2}
            onMouseMove={(e) => handleMouseMove(e, cardRef2)}
            onMouseLeave={() => handleMouseLeave(cardRef2)}
            className="transition-all duration-500 rounded-2xl p-7 
            bg-white border border-[#fbc02d]/40 
            shadow-[0_16px_40px_rgba(0,32,80,0.08)] ring-1 ring-transparent hover:shadow-[0_28px_70px_rgba(0,32,80,0.16)] hover:border-[#fbc02d] hover:ring-[#fbc02d]/25"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-[#fbc02d]/10 border border-[#fbc02d]/30">
                <Image src={PinIcon} alt="location" width={36} height={36} />
              </div>

              <h3 className="text-lg font-semibold text-[#002050]">
                Noida Office
              </h3>
            </div>

            <div className="text-gray-700 text-[20px] leading-7 space-y-1">
              <p className="font-medium text-[#002050]">
                AtiSunya Infotech Pvt Ltd
              </p>
              <p>A-522, Tower-A</p>
              <p>Logix Technova, Plot No. 04</p>
              <p>Sector-132, Noida – 201309</p>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>

          {/* Hyderabad Office */}
          <div
            ref={cardRef3}
            onMouseMove={(e) => handleMouseMove(e, cardRef3)}
            onMouseLeave={() => handleMouseLeave(cardRef3)}
            className="transition-all duration-500 rounded-2xl p-7 
            bg-white border border-[#fbc02d]/40 
            shadow-[0_16px_40px_rgba(0,32,80,0.08)] ring-1 ring-transparent hover:shadow-[0_28px_70px_rgba(0,32,80,0.16)] hover:border-[#fbc02d] hover:ring-[#fbc02d]/25"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-[#fbc02d]/10 border border-[#fbc02d]/30">
                <Image src={PinIcon} alt="location" width={36} height={36} />
              </div>

              <h3 className="text-lg font-semibold text-[#002050]">
                Hyderabad Office
              </h3>
            </div>

            <div className="text-gray-700 text-[20px] leading-7 space-y-1">
              <p className="font-medium text-[#002050]">
                Innov8, 7th Floor
              </p>
              <p>Vasavi Sky City</p>
              <p>Telecom Nagar, Gachibowli</p>
              <p>Hyderabad - 500032</p>
              <p>Telangana, India</p>
            </div>
          </div>

          {/* USA Office */}
          <div
            ref={cardRef4}
            onMouseMove={(e) => handleMouseMove(e, cardRef4)}
            onMouseLeave={() => handleMouseLeave(cardRef4)}
            className="transition-all duration-500 rounded-2xl p-7 
            bg-white border border-[#fbc02d]/40 
            shadow-[0_16px_40px_rgba(0,32,80,0.08)] ring-1 ring-transparent hover:shadow-[0_28px_70px_rgba(0,32,80,0.16)] hover:border-[#fbc02d] hover:ring-[#fbc02d]/25"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-[#fbc02d]/10 border border-[#fbc02d]/30">
                <Image src={PinIcon} alt="location" width={36} height={36} />
              </div>

              <h3 className="text-lg font-semibold text-[#002050]">
                USA Office
              </h3>
            </div>

            <div className="text-gray-700 text-[20px] leading-7 space-y-1">
              <p className="font-medium text-[#002050]">
                101 Hampshire Drive
              </p>
              <p>Plainsboro Township</p>
              <p>New Jersey 08536</p>
              <p>United States</p>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#fbc02d]/40">
            <Image
              src="/map.png"
              alt="AtiSunya Office Location Map"
              width={1400}
              height={500}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute left-[61%] top-[60%] max-w-[260px] -translate-x-1/2 rounded-[10px] border border-white/20 bg-[#002050]/90 px-4 py-3 text-sm font-medium leading-6 text-white shadow-[0_18px_38px_rgba(0,32,80,0.35)] backdrop-blur">
              <div className="absolute -top-11 left-1/2 -translate-x-1/2 text-[#f04438] drop-shadow-[0_12px_16px_rgba(0,0,0,0.35)]">
                <MapPin size={46} fill="currentColor" strokeWidth={1.5} />
              </div>
              <p className="font-semibold">Innov8, 7th Floor, Vasavi Sky City</p>
              <p>Telecom Nagar, Gachibowli</p>
              <p>Hyderabad - 500032</p>
              <p>Telangana, India</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
