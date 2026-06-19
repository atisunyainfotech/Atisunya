"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import PinIcon from "@/assets/icons/location-pin.svg";
import WhatsappIcon from "@/assets/icons/chat-on-whatsapp.svg";
import ContactForm from "@/components/globals/contact-form";

export default function ContactUsPage() {

  const handleMouseMove = (e: any, ref: any) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = (ref: any) => {
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const cardRef1 = useRef<any>(null);
  const cardRef2 = useRef<any>(null);
  const cardRef3 = useRef<any>(null);

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

          <div className="w-24 h-[2px] bg-[#fbc02d] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 [perspective:1200px]">

          {/* Contact Info */}
          <div
            ref={cardRef1}
            onMouseMove={(e) => handleMouseMove(e, cardRef1)}
            onMouseLeave={() => handleMouseLeave(cardRef1)}
            className="transition-all duration-300 rounded-2xl p-7 
            bg-white border border-[#fbc02d]/40 
            shadow-md hover:shadow-xl hover:border-[#fbc02d]"
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
            className="transition-all duration-300 rounded-2xl p-7 
            bg-white border border-[#fbc02d]/40 
            shadow-md hover:shadow-xl hover:border-[#fbc02d]"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 rounded-xl bg-[#fbc02d]/10 border border-[#fbc02d]/30">
                <Image src={PinIcon} alt="location" width={36} height={36} />
              </div>

              <h3 className="text-lg font-semibold text-[#002050]">
                India Office
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

          {/* USA Office */}
          <div
            ref={cardRef3}
            onMouseMove={(e) => handleMouseMove(e, cardRef3)}
            onMouseLeave={() => handleMouseLeave(cardRef3)}
            className="transition-all duration-300 rounded-2xl p-7 
            bg-white border border-[#fbc02d]/40 
            shadow-md hover:shadow-xl hover:border-[#fbc02d]"
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
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#fbc02d]/40">
            <Image
              src="/map.png"
              alt="AtiSunya Office Location Map"
              width={1400}
              height={500}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}