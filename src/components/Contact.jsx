import React from "react";

function Contact() {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Inquiry Sent Successfully! We will get back to you shortly.");
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden no-scrollbar px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,15,15,1)_0%,rgba(0,0,0,1)_100%)]"></div>

      <div className="z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 hidden md:block">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
            Get In <br />
            <span className="bg-linear-to-r from-gray-100 to-gray-500 text-transparent bg-clip-text">
              Touch
            </span>
          </h1>
          <div className="space-y-4 opacity-50">
            <p className="text-[9px] uppercase tracking-[0.5em]">
              Inquiries: hello@shopzone.com
            </p>
            <p className="text-[9px] uppercase tracking-[0.5em]">
              Support: +1 234 567 890
            </p>
            <p className="text-[9px] uppercase tracking-[0.5em]">
              Location: Studio 404, NYC
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <h1 className="text-3xl font-black uppercase italic md:hidden mb-6">
            Contact
          </h1>

          <div className="space-y-3">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-transparent border border-white/10 rounded-sm text-[10px] uppercase tracking-widest focus:border-white/40 outline-none transition-all placeholder:text-gray-700"
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full p-4 bg-transparent border border-white/10 rounded-sm text-[10px]  tracking-widest focus:border-white/40 outline-none transition-all placeholder:text-gray-700"
            />
            <textarea
              required
              placeholder="Message"
              className="w-full p-4 bg-transparent border border-white/10 rounded-sm text-[10px] uppercase tracking-widest focus:border-white/40 outline-none transition-all h-32 resize-none placeholder:text-gray-700"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-500 shadow-xl active:scale-95"
          >
            Send Inquiry →
          </button>
        </form>
      </div>

      <div className="absolute bottom-10 opacity-20">
        <p className="text-[7px] tracking-[1.5em] uppercase font-light italic">
          Correspondence / 2026
        </p>
      </div>
    </div>
  );
}

export default Contact;
