/**
 * @fileoverview Componente `Box`
 *
 * Caja informativa con título y párrafo.  
 * Ideal para mostrar beneficios, características o mensajes cortos.
 *
 * @module Box
 */

/**
 * `Box`
 *
 * Renderiza un bloque con fondo oscuro, texto centrado y sombras suaves.
 * Pensado para secciones de servicios, características o información clave.
 *
 * Ejemplo:
 * ```jsx
 * <Box
 *   title="Diseño único"
 *   paragraph="Creamos identidades visuales memorables."
 * />
 * ```
 *
 * @param {Object} props
 * @param {string} props.title - Título principal del bloque.
 * @param {string} props.paragraph - Texto descriptivo.
 */
export default function Box({ title, paragraph }) {
  return (
    <div
      className="relative rounded-2xl bg-black/80 text-white
                 px-6 py-5 ring-1 ring-white/10
                 shadow-[0px_4px_10px_2px_#E9E6E6]
                 h-full flex flex-col items-center justify-center text-center"
    >
      <h4 className="text-lg sm:text-md md:text-xl font-bold">{title}</h4>
      <p className="text-lg leading-relaxed">{paragraph}</p>
    </div>
  );
}
