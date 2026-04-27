"use client";

import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";

export default function DownloadBrochureForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    requirements: "",
  });

  const [popup, setPopup] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showPopup = (type: "success" | "error", message: string) => {
    setPopup({ type, message });
    setTimeout(() => {
      setPopup({ type: null, message: "" });
    }, 3000);
  };


  const sendMailToUser = async () => {
    try {
      await sendEmail(formData);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Failed to send email:", error);
    }

    const link = document.createElement("a");
    link.href = "/AtiSunyaInfotech-brochure.pdf";
    link.download = "AtiSunyaInfotech-Brochure.pdf";
    link.click();
  };
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.contact ||
      !formData.email ||
      !formData.requirements
    ) {
      showPopup("error", "Please fill all fields");
      return;
    }

    const phoneNumber = "919021023513";

    const message = `Hello, Can I know About Services .

    Name: ${formData.name}
    Contact: ${formData.contact}
    Email: ${formData.email}
    Requirements: ${formData.requirements}`;

    const encodedMessage = encodeURIComponent(message);

    // ✅ WhatsApp
    // window.open(
    //   `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    //   "_blank"
    // );

    // ✅ Email (opens mail client)
    // const email = "mktg@atisunyainfotech.com";
    // const subject = encodeURIComponent("New Brochure Request");
    // const body = encodeURIComponent(message);

    // window.open(`mailto:${email}?subject=${subject}&body=${body}`);

    // ✅ Download brochure
    const link = document.createElement("a");
    link.href = "/AtiSunyaInfotech-brochure.pdf";
    link.download = "AtiSunyaInfotech-Brochure.pdf";
    link.click();

    sendMailToUser();
    showPopup("success", "WhatsApp opened, Email ready & Brochure downloaded!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-10 rounded-xl 
        border-2 border-[#fbc02d] 
        shadow-[0_0_0_2px_rgba(251,192,45,0.15)] 
        hover:shadow-[0_0_20px_rgba(251,192,45,0.35)] 
        transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-[#fbc02d] text-center">
          Download Brochure
        </h2>

        <p className="text-gray-600 text-center mt-2 mb-8">
          Fill your details and get instant access
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-[#fbc02d] px-4 py-3 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#fbc02d]/40"
          />

          <input
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border border-[#fbc02d] px-4 py-3 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#fbc02d]/40"
          />

          <input
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="md:col-span-2 w-full border border-[#fbc02d] px-4 py-3 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#fbc02d]/40"
          />

          <textarea
            name="requirements"
            placeholder="Your Requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={4}
            className="md:col-span-2 w-full border border-[#fbc02d] px-4 py-3 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-[#fbc02d]/40"
          />
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-[#002050] text-white py-3 rounded-lg font-semibold text-lg 
          hover:bg-[#2F7F78] transition-all duration-300"
        >
          Submit & Download Brochure
        </button>
      </form>

      {/* POPUP */}
      {popup.type && (
        <div
          className={`fixed top-6 right-6 px-6 py-4 rounded-lg shadow-lg border-l-4 
          ${popup.type === "success" ? "bg-white border-green-500" : "bg-white border-red-500"}
          animate-[slideIn_0.4s_ease-out]`}
        >
          <p className="font-semibold text-[#002050]">
            {popup.type === "success" ? "Success" : "Error"}
          </p>
          <p className="text-sm text-gray-600">{popup.message}</p>
        </div>
      )}
    </div>
  );
}