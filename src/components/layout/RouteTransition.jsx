"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@ui/PageLoader";

export default function RouteTransition({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // al cambiar la ruta → mostrar loader
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // duración de la transición visual

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <PageLoader isVisible={loading} />
      {children}
    </>
  );
}
