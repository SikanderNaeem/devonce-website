"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-linear-to-br from-[#0F6679] via-[#0F8090] to-[#02B3BD]">
      {/* BG Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0F6679]/40 to-[#02B3BD]/20 blur-3xl"></div>

      {/* Company Logo */}
      <div className="z-20 flex items-center justify-center gap-3 bg-white p-4 rounded-b-xl">
        <Image
          src="/devonce-logo.png" 
          alt="DevOnce Logo"
          width={280}
          height={280}
          priority
        />
      </div>

      <div className="flex flex-col lg:flex-none min-h-screen relative z-10 text-white">
        <main className="grow flex items-center justify-center relative overflow-hidden px-6 py-20">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text Section */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-center font-headline text-4xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg">
                Innovate. Code. Evolve.
              </h1>
              <p className="mx-auto md:mx-0 text-lg md:text-xl text-center leading-relaxed text-[#D0D7DB]">
                At DevOnce Technologies, our team is shaping the next wave of digital innovation — smarter systems, seamless designs, and scalable solutions. Our vision is in motion, and the wait will be worth it.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-[#0F6679] to-[#02B3BD] rounded-full opacity-85 blur-3xl"></div>
                <Image
                  // src="https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png"
                  src="/right-img2.png"
                  alt="Illustration"
                  width={1000}
                  height={1000}
                  className="relative z-10 mx-auto animate-float"
                />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full p-6 border-t border-[#ffffff20] backdrop-blur-md">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row text-white">
            <p className="text-sm">
              © {new Date().getFullYear()} DevOnce Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 transition-colors hover:text-white" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 transition-colors hover:text-white" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 transition-colors hover:text-white" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
