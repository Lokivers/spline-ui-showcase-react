
'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_8yyr61k';
const TEMPLATE_ID = 'template_thpg2x9';
const PUBLIC_KEY = 'tMnTV04za1zvUD5vb';

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSent(false);

    if (!form.current) return;

    // Set the time field value right before sending
    const timeInput = form.current.querySelector('input[name="time"]');
    if (timeInput && timeInput instanceof HTMLInputElement) {
      timeInput.value = new Date().toLocaleString();
    }

    // Debug output
    const name = (form.current.querySelector('input[name="user_name"]') as HTMLInputElement)?.value;
    const email = (form.current.querySelector('input[name="user_email"]') as HTMLInputElement)?.value;
    const message = (form.current.querySelector('textarea[name="message"]') as HTMLTextAreaElement)?.value;
    const time = (form.current.querySelector('input[name="time"]') as HTMLInputElement)?.value;
    console.log('Sending to EmailJS:', { name, email, message, time });

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        form.current?.reset();
      }, (err) => {
        setError('Failed to send message. Please try again later.');
        console.error(err);
      });
  };

  return (
    <section id="contact" className="relative py-20 px-4 min-h-[60vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-0">
        <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-blue-700 opacity-30 rounded-full filter blur-3xl animate-blob1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-700 opacity-30 rounded-full filter blur-3xl animate-blob2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-600 opacity-20 rounded-full filter blur-2xl animate-blob3" />
      </div>
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(40px) scale(1.05); }
        }
        @keyframes blob3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-60%, -60%) scale(1.08); }
        }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 16s ease-in-out infinite; }
      `}</style>
      <div className="w-full max-w-xl mx-auto z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            required
            className="p-3 rounded-xl border border-white/20 bg-white/20 placeholder:text-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40 backdrop-blur-md"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-xl border border-white/20 bg-white/20 placeholder:text-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40 backdrop-blur-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 rounded-xl border border-white/20 bg-white/20 placeholder:text-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/40 backdrop-blur-md resize-none"
          />
          <input type="hidden" name="time" value="" />
          <button
            type="submit"
            className="mt-2 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
          >
            Send
          </button>
          {sent && <p className="text-green-300 text-center font-medium">Message sent successfully!</p>}
          {error && <p className="text-red-400 text-center font-medium">{error}</p>}
        </form>
      </div>
    </section>
  );
}
