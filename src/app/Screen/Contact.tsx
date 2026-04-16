"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    if (!message.trim()) {
      setError("Message is required");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending (replace with real backend later)
    setTimeout(() => {
      setSuccess("Message sent successfully! I'll get back to you soon.");
      setError("");
      setIsSubmitting(false);

      // Clear form after success
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-stone-950 flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
            Get In <span className="text-violet-400">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's talk.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-stone-900/70 backdrop-blur-xl border border-violet-700/30 rounded-3xl p-10 shadow-2xl space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Benjamin Eboh"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="inputs w-full"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+234 000 000 0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="inputs w-full"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputs w-full"
              required
            />
            {error && <p className="mt-2 text-red-500 text-sm font-medium">{error}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Message</label>
            <textarea
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={7}
              className="inputs w-full resize-y min-h-[160px]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-800 transition-all py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <div className="mt-8 bg-green-900/80 border border-green-500 text-green-300 px-8 py-6 rounded-2xl text-center text-lg font-medium animate-fade-in">
            {success}
          </div>
        )}
      </div>
    </div>
  );
}