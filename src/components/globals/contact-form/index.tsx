"use client";

import { FormEvent, useState } from "react";
import { User, Phone, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData(e.target as HTMLFormElement);

      const resp = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phoneNumber: formData.get("phoneNumber"),
          message: formData.get("message"),
        }),
      });

      if (resp.ok) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-1 bg-gray-100">
      <div className="max-w-xl mx-auto px-6">

        {/* Contact Card */}
        <div className="bg-white border-2 border-[#fbc02d] rounded-2xl p-10 shadow-xl">

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="text-[#2F7F78] uppercase tracking-widest text-sm font-semibold">
              Contact Us
            </p>

            <h2 className="text-3xl font-bold text-[#002050] mt-2">
              Let's Discuss Your Project
            </h2>

            <p className="text-gray-600 text-sm mt-3">
              Share your business requirements and our experts will guide you with the best ERP solutions.
            </p>

            <div className="w-20 h-[3px] bg-[#fbc02d] mx-auto mt-5 rounded-full" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">

            {showSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-md text-sm">
                Thank you! Our team will contact you shortly.
              </div>
            )}

            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-4 text-[#2F7F78] w-5 h-5" />

              <input
                type="text"
                name="name"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md pl-10 pt-5 pb-2 px-3
                focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] outline-none transition"
              />

              <label className="absolute left-10 top-2 text-sm text-gray-500
              peer-placeholder-shown:top-3.5
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-[#002050] transition-all">
                Full Name
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-4 text-[#2F7F78] w-5 h-5" />

              <input
                type="tel"
                name="phoneNumber"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md pl-10 pt-5 pb-2 px-3
                focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] outline-none transition"
              />

              <label className="absolute left-10 top-2 text-sm text-gray-500
              peer-placeholder-shown:top-3.5
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-[#002050] transition-all">
                Contact Number
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-[#2F7F78] w-5 h-5" />

              <input
                type="email"
                name="email"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md pl-10 pt-5 pb-2 px-3
                focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] outline-none transition"
              />

              <label className="absolute left-10 top-2 text-sm text-gray-500
              peer-placeholder-shown:top-3.5
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-[#002050] transition-all">
                Business Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-[#2F7F78] w-5 h-5" />

              <textarea
                name="message"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md pl-10 pt-5 pb-2 px-3 h-32
                focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] outline-none transition"
              />

              <label className="absolute left-10 top-2 text-sm text-gray-500
              peer-placeholder-shown:top-4
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-focus:top-2
              peer-focus:text-sm
              peer-focus:text-[#002050] transition-all">
                Project Requirement
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md font-semibold text-white
              bg-[#002050] hover:bg-[#2F7F78] transition shadow-lg"
            >
              {loading ? "Submitting..." : "Submit Your Request"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;