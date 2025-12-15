/**
 * @fileoverview Sección que muestra una cuadrícula de proyectos usando `ProjectCard`.
 */

import ProjectCard from "@ui/ProjectCard";

/**
 * `ProjectsSection`
 *
 * Muestra un grid responsivo de proyectos.
 * Si el número total deja un espacio vacío (mod 4), el último proyecto se centra.
 *
 * @param {string} [title]      — Título opcional de la sección.
 * @param {Array}  projects     — Lista de proyectos a renderizar.
 *
 * @example
 * <ProjectsSection title="Nuestros proyectos" projects={data} />
 */
export default function ProjectsSection({ title, projects }) {
  const centerLast = projects.length % 4 === 1;

  return (
    <section className="bg-white py-12 text-black">
      {title && (
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
        </header>
      )}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => {
          const isLast = i === projects.length - 1;

          return (
            <div
              key={project.title || i}
              className={isLast && centerLast ? "lg:col-span-3 flex justify-center" : ""}
            >
              <div className="w-full h-full max-w-sm mx-auto">
                <ProjectCard {...project} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
