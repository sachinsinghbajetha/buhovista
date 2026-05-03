import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="BuhoVista Logo"
            className="w-10 h-10 invert opacity-100"
          />
          <h2 className="text-xl font-dmsans font-semibold tracking-tight text-white flex items-center gap-2">
            BuhoVista Technologies
          </h2>
        </div>

        {/* Contact Info - Center Aligned in Desktop */}
        <div className="flex flex-col gap-2 font-dmsans text-sm md:text-base text-white/60">
          <a
            href="mailto:contact@buhovista.in"
            className="hover:text-primary transition-colors text-white/60"
          >
            contact@buhovista.in
          </a>
          <span>+91 XXXXX XXXXX</span>
          <span className="text-white/60">Serving schools across India</span>
        </div>

        {/* Tagline - Right Aligned */}
        <div className="flex flex-col items-start md:items-end text-left md:text-right">
          <h3 className="text-xl font-lora max-w-[340px] leading-[1.4] text-white">
            Transforming School Operations with Practical Technology
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
