"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setStatus(null), 5000); // Clear status after 5s
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-3xl w-full border-2 border-black">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Contact Us
        </h1>
        <p className="text-center text-black mb-10">
          Have any queries or feedback? Send us a message!
        </p>
        {status && (
          <p className="text-center mb-4 text-green-600 font-semibold">
            {status}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-4 border border-black bg-transparent text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-black bg-transparent text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Your Message
            </label>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full p-4 border border-black bg-transparent text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
