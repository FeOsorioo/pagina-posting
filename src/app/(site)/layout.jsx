"use client";

import { useState } from "react";

import Logo from "@ui/Logo";
import Footer from "@layout/Footer";
import Header from "@layout/Header";
import RouteTransition from "@layout/RouteTransition";
import FullScreenMenu from "@layout/Header/FullScreenMenu";
import ButtonCallToAction from "@/components/ui/ButtonCallToAction";

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <RouteTransition>
      <Logo />
      <Header onOpenMenu={() => setMenuOpen(true)} />

      <FullScreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <main id="site-content">
        {children}

        <ButtonCallToAction
          text="Empieza a creer"
          link="/contacto"
          color="pink"
          hidden={menuOpen}
        />
      </main>

      <Footer />
    </RouteTransition>
  );
}
