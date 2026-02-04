"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(e.target as HTMLFormElement);

      const name = formData.get("name");
      const email = formData.get("email");
      const phoneNumber = formData.get("phoneNumber");
      const message = formData.get("message");

      const resp = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          message,
        }),
      });

      if (resp.ok) {
        setShowSuccess(true);
      }
    } catch (error) {
      console.log("Error ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto shadow-sm px-5 pb-10 pt-6 mt-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {showSuccess && (
          <h3 className="bg-green/20 p-3 rounded-md font-medium">
            Thank you for reaching us. We will contact you shortly
          </h3>
        )}

        <div className="space-y-2">
          <label>Name</label>
          <input type="text" name="name" placeholder="Full Name" required />
        </div>

        <div className="space-y-2">
          <label>Contact Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Contact Number"
            required
          />
        </div>

        <div className="space-y-2">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" required />
        </div>

        <div className="space-y-2">
          <label>Requirement</label>
          <textarea
            name="message"
            placeholder="Your Requirement / message"
            className="h-32"
            required
          />
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            aria-disabled={loading}
            className={`bg-green px-4 py-1.5 text-white rounded-sm cursor-pointer hover:opacity-80 transition ${
              loading && "opacity-50 cursor-wait"
            }`}
          >
            Submit
          </button>

          {/* AtiSunya App Button */}
          {/* <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green px-4 py-1.5 text-white rounded-sm cursor-pointer hover:opacity-80 transition"
          >
            AtiSunya App
          </Link > */}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
