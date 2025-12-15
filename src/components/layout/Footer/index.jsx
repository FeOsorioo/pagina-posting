
import Image from "next/image";
import Link from "next/link";

/* ====== Recursos gráficos ====== */
import logo_blanco from "@/assets/logo_blanco.webp";
import ig from "@/assets/redes/ig.webp";
import linkedin from "@/assets/redes/linkedin.webp";
import youtube from "@/assets/redes/youtube.webp";
import pinterest from "@/assets/redes/pinterest.webp";
import tiktok from "@/assets/redes/tiktok.webp";
import whatsApp from "@/assets/redes/whatsApp.webp";
import NewsletterForm from "./NewsletterForm";
export default function Footer() {



  return (
    <footer className="bg-black text-white px-6 py-12 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-center lg:items-start text-center lg:text-left">

        {/* 🟣 LOGO */}
        <div className="flex flex-col items-center lg:items-start">
          <Link href="/" passHref>
            <Image
              src={logo_blanco}
              alt="Logo de Posting Agency"
              width={120}
              height={60}
              className="mb-4 mx-auto lg:mx-0 w-20 sm:w-28 lg:w-32 h-auto transition-all duration-300 mt-12"

              loading="lazy"
            />
          </Link>
        </div>
        <div className="hidden lg:block w-px bg-white self-stretch" />

        {/*  NEWSLETTER */}
        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-5/12">
          <h3 className="mb-3 text-lg sm:text-xl font-semibold uppercase tracking-wide text-white">
            Inscríbete a nuestro newsletter
          </h3>

          <NewsletterForm />
        </div>

        {/*  CONTACTO Y REDES - (Sin cambios aquí, código original resumido) */}
        <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
          <h3 className="mb-3 text-lg sm:text-xl font-semibold text-white">Aquí nos encuentras</h3>
          <ul className="text-gray-300 text-sm sm:text-base space-y-1 mb-4">
            <li>Bogotá, Colombia</li>
            <li>Carrera 21 # 164 - 39</li>
            <li>+57 316 5673119</li>
            <li><a href="mailto:comercial@posting.com.co">comercial@posting.com.co</a></li>
            <li><a href="mailto:hola@posting.com.co">hola@posting.com.co</a></li>
          </ul>
          {/* ...iconos de redes sociales... */}
          <div className="flex gap-3 sm:gap-5 justify-center lg:justify-start">
            {[
              { href: "https://www.instagram.com/postingbyccg?igsh=OHJpeWd4NWtienBu ", src: ig, alt: "Instagram" },
              { href: "https://pin.it/2J0r3650X", src: pinterest, alt: "Pinterest" },
              { href: "https://www.tiktok.com/@postingbyccg?_t=zs-903ugde5eis&_r=1", src: tiktok, alt: "TikTok" },
              { href: "https://www.linkedin.com/company/postingbyccg/", src: linkedin, alt: "LinkedIn" },
              { href: "https://youtube.com/@postingagencia?si=hyM_bDXOsbfTEIw0", src: youtube, alt: "YouTube" },
              { href: "https://wa.link/zppguy", src: whatsApp, alt: "WhatsApp" },
            ].map(({ href, src, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image src={src} alt={alt} width={36} height={36} className="h-7 w-7 sm:h-9 sm:w-9" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* 🔸 Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs sm:text-sm text-gray-500">
        <span className="block">
          © {new Date().getFullYear()} Contact Center Grupo. Todos los derechos reservados.
        </span>

        <a
          href="/politicas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-1 hover:underline"
        >
          Políticas de privacidad
        </a>
      </div>


    </footer >
  );
}