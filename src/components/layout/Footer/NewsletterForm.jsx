"use client";

import { IoSendSharp } from "react-icons/io5";
import { useNewsletter } from "./useNewsletter";

export default function NewsletterForm() {
  const { email, setEmail, status, handleSubmit } = useNewsletter();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center lg:items-start">
      <div className="relative w-full mb-3">
        <input
          type="email"
          required
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-white bg-white text-black pl-4 pr-12 py-2"
          disabled={status === "loading"}
        />

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`absolute right-2 top-1 bottom-1 flex items-center opacity-100 transition-all ${
            email ? "scale-100" : "opacity-0 scale-50 pointer-events-none"
          }`}
        >
          {status === "loading" ? (
            <span className="animate-spin h-5 w-5 border-2 border-pink-600 border-t-transparent rounded-full" />
          ) : (
            <IoSendSharp size={20} color="#e60076" />
          )}
        </button>
      </div>

      <p className="text-[11px] sm:text-xs text-white mb-4">
        Ingresando mi dirección de correo autorizo el tratamiento de datos personales y el envío de mensajes de a mi correo según la 
        <a href="https://www.ccgrupo.com.co/politica-de-privacidad/" target="_blank" className="px-1">
           política de privacidad
        </a>
      </p>

      {status === "success" && (
        <p className="text-xs text-pink-600 font-semibold mb-4">
          ¡Gracias! Tus datos han sido registrados.
        </p>
      )}

      {status === "error" && (
        <p className="text-xs text-red-400 font-semibold mb-4">
          Hubo un error. Inténtalo nuevamente.
        </p>
      )}
    </form>
  );
}
