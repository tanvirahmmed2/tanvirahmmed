import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0k20udb",     // e.g. service_xxxxxx
        "template_2ux1g4w",    // e.g. template_yyyyyy
        form.current,
        "OW99hbzZm9dNgQgM4"      // e.g. 2BgXXXXXXXXXX
      )
      .then(
        (result) => {
          alert("Report sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send report.");
          console.error(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold">Report a Problem</h2>
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Describe your problem..."
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Report
      </button>
    </form>
  );
}
