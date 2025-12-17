import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function ClienteCard({
  imageSrc,
  videoSrc,
  alt,
  title,
  link,
  description,
  mediaHeight = "450px",
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article className="w-full group">
      <Link href={link} className="w-full">
        <div
          className="w-full overflow-hidden rounded-md bg-neutral-100"
          style={{ height: mediaHeight }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative h-full w-full">
            {/* Imagen */}
            <Image
              src={imageSrc}
              alt={alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover
                         transition-opacity duration-500 ease-in-out
                         group-hover:opacity-0"
            />

            {/* Video */}
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover
                         opacity-0 transition-opacity duration-500 ease-in-out
                         group-hover:opacity-100"
            />
          </div>
        </div>

        <h3 className="mt-3 text-lg font-bold text-neutral-900">{title}</h3>

        {description && (
          <p className="text-sm text-neutral-700 leading-relaxed">
            {description}
          </p>
        )}
      </Link>
    </article>
  );
}
