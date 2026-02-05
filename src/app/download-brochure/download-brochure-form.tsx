"use client";

import { useState } from "react";

export default function DownloadBrochureForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.contact ||
      !formData.email ||
      !formData.requirements
    ) {
      alert("Please fill all fields");
      return;
    }

    const link = document.createElement("a");
    link.href = "/AtiSunyaInfotech-brochure.pdf";
    link.download = "AtiSunyaInfotech-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Download Brochure
      </h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          name="requirements"
          placeholder="Your Requirements"
          value={formData.requirements}
          onChange={handleChange}
          rows={3}
          className="w-full border px-3 py-2 rounded"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-blue text-yellow py-2 rounded font-semibold hover:bg-black"
        >
          Submit & Download Brochure
        </button>
      </div>
    </div>
  );
}
