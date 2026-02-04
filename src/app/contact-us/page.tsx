
import { Metadata } from "next"
import Image from "next/image";
import PinIcon from "@/assets/icons/location-pin.svg"
import Link from "next/link";
import WhatsappIcon from "@/assets/icons/chat-on-whatsapp.svg"
import ContactForm from "@/components/globals/contact-form";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us : Schedule a free 1:1 call with Jamisu',
}


const ContactUsPage = () => {


  return <>
    <section className="container pb-20">
      <h1 className="text-3xl lg:text-5xl font-semibold mt-10 text-center">Get in Touch</h1>

      <ContactForm />
      <div className="">
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
          <div className="font-medium text-15 bg-white-secondary/20 p-4 space-y-4">
            <p className="space-x-3">
              <span className="inline-block">
                📞
              </span>
              <Link href="tel:+919975549318" className="hover:underline"> +91 9021023513 </Link>

            </p>

            <p className="space-x-3">
              <span className="inline-block text-lg">
                📧
              </span>
              <Link href="mailto:sales@jamisu.com" className="hover:underline">
               mktg@atisunyainfotech.com
              </Link>
            </p>
            <p className="space-x-3">
              <span className="inline-block text-lg">
                📧
              </span>
              <Link href="mailto:pmo@jamisu.com" className="hover:underline">
                info@atisunya.co
              </Link>
            </p>

            <Link href={"https://wa.me/+919021023513"}>
              <Image
                src={WhatsappIcon}
                alt="chat on whatsapp"
                width={180}
                className="hover:opacity-80"
              />
            </Link>
          </div>
          <div className="space-y-3 bg-white-secondary/20 p-4 rounded-md">
            <Image
              src={PinIcon}
              alt=""
              width={40} height={40}
            />
            <p className="text-15">
              AtiSunya Infotech Pvt Ltd -A-522 , Tower-A ,
              <br />
              Logix Technova, Plot No. 04 , Block A , Sec-132 Noida - 201309 ,
              <br />
              Sec-132 Noida - 201309 (Uttar Pradesh)
              <br />
              INDIA
            </p>
          </div>
          {/* <div className="space-y-3 bg-white-secondary/20 p-4 rounded-md">
            <Image
              src={PinIcon}
              alt=""
              width={40} height={40}
            />
            <p className="text-15">
              Tower - D, The Golden Palm Sector - 168,
              <br />
              Noida - 201304
              <br />
              INDIA
            </p>
          </div> */}

          
        </div>

       </div>

      { <div className="w-full h-[390px] md:h-[500px] mt-10 rounded-md overflow-hidden">
        <iframe className="w-full h-full" src="https://www.google.com/maps/place/AtiSunya+Private+Limited/@28.4968172,77.4069876,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce928dd54fc73:0x531361528b9b0680!8m2!3d28.4968125!4d77.4095625!16s%2Fg%2F11t6g4_746?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D" width="600" height="450" allowFullScreen loading="lazy"></iframe>
      </div>  }

    </section>
  </>
}


export default ContactUsPage