import Button from "@components/ui/Button";

const CardService = ({ service }) => {
  /* Divide el título en:
     - firstWord → primera palabra
     - rest → el resto del título (resaltado) */
  const [firstWord, ...rest] = service.title.split(" ");
  const restOfTitle = rest.join(" ");

  return (
    <div
      className="grid min-h-[500px] grid-cols-1 items-center gap-8 
                 rounded-3xl bg-white p-6 text-black shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                 ring-1 ring-black/5 md:grid-cols-2"
    >
      {/* === Columna izquierda: título + texto === */}
      <div className="mx-4">
        <h3 className="mb-4 flex flex-col text-4xl font-bold leading-tight tracking-tight">
          <span>{firstWord}</span>

          {restOfTitle && (
            <span className="w-fit rounded bg-black px-3 py-1 text-white">
              {restOfTitle}
            </span>
          )}
        </h3>

        {/* Subservicios */}
        {service.subServices && (
          <div className="mt-4 flex flex-wrap gap-2">
            {service.subServices.map((item, i) => (
              <Button
                key={i}
                href={`${service.ctaLink}#${item.link}`}
                size="xs"
                variant="white"
                width="w-auto"
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}

        {/* Descripción */}
        {service.description && (
          <p className="mt-4 whitespace-pre-line text-lg leading-relaxed text-gray-600">
            {service.description}
          </p>
        )}

        {/* CTA principal */}
        {service.ctaLink && (
          <Button
            href={service.ctaLink}
            size="sm"
            variant="primary"
            width="w-auto"
            className="mt-6"
          >
            Ver más
          </Button>
        )}
      </div>

      {/* === Columna derecha: video === */}
      {service.video && (
        <div className="flex justify-center">
          <video
            src={service.video}
            muted
            loop
            autoPlay
            loading="lazy"
            playsInline
            preload="metadata"
            className="max-h-[450px] rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default CardService;
