/**
 * @fileoverview Componente `TextBanner`
 *
 * Muestra un banner de texto con fondo oscuro, soporte para ícono decorativo,
 * encabezado principal y párrafo secundario. Ideal para secciones introductorias,
 * valores de marca o bloques destacados.
 *
 * @module TextBanner
 * @requires next/image
 */

'use client';
import PropTypes from 'prop-types';
import Image from 'next/image';

/**
 * `TextBanner`
 *
 * Banner textual adaptable con soporte para ícono, bordes redondeados y alineación lateral.
 *
 * @example
 * ```jsx
 * import TextBanner from '@ui/TextBanner';
 * import icon from '@/assets/icons/star.webp';
 *
 * export default function ExampleSection() {
 *   return (
 *     <TextBanner
 *       iconUrl={icon}
 *       paragraph="Creamos experiencias que inspiran y conectan."
 *       rounded="right"
 *       textColor="text-white"
 *       position="start"
 *       fontBreak="font-bold tracking-tight"
 *     >
 *       Innovamos <br /> con propósito
 *     </TextBanner>
 *   );
 * }
 * ```
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Título o contenido principal del banner.
 * @param {string} [props.paragraph] - Texto descriptivo opcional bajo el título.
 * @param {string} [props.iconUrl] - URL o import de imagen para ícono decorativo.
 * @param {string} [props.fontBreak] - Clases personalizadas para tipografía.
 * @param {'left'|'right'|''} [props.rounded] - Posición del redondeo decorativo.
 * @param {string} [props.textColor='text-white'] - Color del texto.
 * @param {'start'|'end'} [props.position='start'] - Alineación del contenido.
 * @returns {JSX.Element} Banner de texto estilizado.
 */

export default function TextBanner({
  children,
  paragraph = '',
  iconUrl = null,
  fontBreak = '',
  rounded = '',
  textColor = 'text-white',
  position = 'start',
  bg = 'bg-black',
  padding = '',
  classNameTitle,
  classNameParagraph,
}) {
  const roundedAlignment = {
right: 'md:rounded-tr-3xl md:rounded-br-3xl',
left: 'md:rounded-tl-3xl md:rounded-bl-3xl',

  };

  const containerPosition = {
    start: 'mr-auto text-left',
    end: 'ml-auto text-right',
  };

  return (
    <section
      className={`
        flex flex-col justify-center 
        w-full md:w-5/6 py-10 sm:py-16 mt-6
        ${bg}
        ${containerPosition[position] || ''}
        ${padding}
        ${roundedAlignment[rounded] || ''}
        relative  overflow-hidden
      `}
      role="region"
      aria-label="Sección destacada de texto"
    >

      <div
        className={`
          mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12
          ${position === 'end' ? 'text-right' : 'text-left'}
        `}
      >
        {/* Ícono decorativo */}
        {iconUrl && (
          <div
            className={`${position === 'end' ? 'ml-auto' : 'mr-auto'
              } mb-4 flex justify-${position}`}
          >
            <Image
              src={iconUrl}
              width={80}
              height={80}
              alt="Ícono decorativo"
              className="h-10 w-auto md:h-12"
              loading="lazy"
            />
          </div>
        )}

        {/* Título principal */}
        {children && (
          <div
            className={`${classNameTitle} text-2xl sm:text-3xl md:text-4xl ${fontBreak} leading-tight ${textColor}`}
          >
            {children}
          </div>
        )}

        {/* Párrafo descriptivo */}
        {paragraph && (
          <p
            className={` ${classNameParagraph}
              text-lg mt-4 ${textColor}
              ${position === 'end' ? 'text-right' : 'text-left'}
            `}
          >
            {paragraph}
          </p>
        )}
      </div>
    </section>
  );
}

TextBanner.propTypes = {
  children: PropTypes.node.isRequired,
  paragraph: PropTypes.string,
  iconUrl: PropTypes.string,
  fontBreak: PropTypes.string,
  rounded: PropTypes.oneOf(['left', 'right', '']),
  textColor: PropTypes.string,
  position: PropTypes.oneOf(['start', 'end']),
};
