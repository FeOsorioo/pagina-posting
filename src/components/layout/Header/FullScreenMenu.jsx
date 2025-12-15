"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

/* Assets */
import logo_blanco from "@/assets/logo_blanco.webp";
import ig from "@/assets/redes/ig.webp";
import linkedin from "@/assets/redes/linkedin.webp";
import pinterest from "@/assets/redes/pinterest.webp";
import tiktok from "@/assets/redes/tiktok.webp";
import whatsApp from "@/assets/redes/whatsApp.webp";
import youtube from "@/assets/redes/youtube.webp";
import arcoiris from "@/assets/elementos/arcoiris.webp";
import flecha from "@/assets/elementos/flecha.webp";

export default function FullScreenMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  // Animación GSAP
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 1.2, ease: "power3.out" });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 1.2,
        ease: "expoScale(0.5,7,none)",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed top-0 left-0 w-full h-full bg-[#000] z-50 transform translate-x-full overflow-hidden"
    >
      {/* Cerrar */}
      <Image
        loading="lazy"
        src={flecha}
        alt="Cerrar menú"
        width={50}
        height={50}
        onClick={onClose}
        aria-label="Cerrar menú"
        className="cursor-pointer absolute top-1/2 left-20 -translate-y-1/2 rotate-180 z-30 hover:opacity-80 transition"
      />

      {/* Decoración lateral */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[90px] z-0">
        <Image
          loading="lazy"
          src={arcoiris}
          alt="Decoración"
          width={100}
          height={100}
          className="absolute right-0 top-0 h-full w-[90px] z-0"
        />
      </div>

      {/* Logo */}
      <Link href="/" passHref prefetch>
        <div className="absolute top-0 left-0 p-12 z-20">
          <Image loading="lazy" src={logo_blanco} width={50} height={50} alt="Logo" />
        </div>
      </Link>

      {/* Navegación */}
      <div className="flex flex-col justify-center items-end px-20 sm:px-14 lg:px-[20%] h-full">
        <nav className="flex flex-col text-white font-bold text-3xl z-10 space-y-6">
          {[
            { label: "Inicio", href: "/" },
            { label: "Nosotros", href: "/nosotros" },
            { label: "Servicios", href: "/servicios" },
            { label: "Blogs", href: "/blogs" },
            { label: "Contacto", href: "/contacto" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              prefetch
              className="transition transform hover:scale-105 hover:opacity-80 duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Redes */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-6 z-20">
        <div className="flex gap-6">
          {[
            { href: "https://www.instagram.com/postingbyccg", src: ig, alt: "Instagram" },
            { href: "https://pin.it/2J0r3650X", src: pinterest, alt: "Pinterest" },
            { href: "https://www.tiktok.com/@postingbyccg", src: tiktok, alt: "TikTok" },
            { href: "https://www.linkedin.com/company/postingbyccg/", src: linkedin, alt: "LinkedIn" },
            { href: "https://youtube.com/@postingagencia", src: youtube, alt: "YouTube" },
            { href: "https://wa.link/zppguy", src: whatsApp, alt: "WhatsApp" },
          ].map(({ href, src, alt }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="relative h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12">
                <Image loading="lazy" src={src} alt={alt} fill className="object-contain" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
