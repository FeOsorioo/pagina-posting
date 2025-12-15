/**
 * @fileoverview Listado de posts con layout alternado y paginación.
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import BackgroundWrapper from "@ui/BackgroundWrapper";

import bgEven from "@/assets/background/bg10.webp";
import bgOdd from "@/assets/background/bg7.webp";

/**
 * `Posts`
 *
 * Renderiza una lista paginada de publicaciones.
 * Cada item alterna su diseño (izquierda/derecha) y usa un fondo decorativo.
 *
 * @param {Array<Object>} posts - Lista de posts provenientes de Sanity.
 *
 * @example
 * <Posts posts={postsData} />
 */
export default function Posts({ posts = [] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <section className="py-10 space-y-10">
      {currentPosts.map((post, index) => {
        const isEven = index % 2 === 0;
        const bgImage = isEven ? bgEven.src : bgOdd.src;

        return (
          <BackgroundWrapper
            key={post._id || post.slug?.current}
            imageUrl={bgImage}
            backgroundSize="50% auto"
            classBG={`bg-no-repeat bg-contain ${isEven ? "bg-right" : "bg-left"
              } py-20`}
          >
            <div
              className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-center gap-8 max-w-6xl mx-auto px-4 md:px-8`}
            >
              {/* Imagen */}
              {post?.imageURL && (
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-full max-w-[220px] overflow-hidden">
                    <Image
                      src={post.imageURL}
                      alt={post.mainImage?.alt || post.title}
                      width={220}
                      loading="lazy"
                      height={160}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              )}

              {/* Información */}
              <div className="flex-1 w-full max-w-2xl text-center md:text-left space-y-4">
                <Link href={`/blogs/${post.slug?.current || ""}`}>
                  <h2
                    className={`text-3xl leading-tight transition-colors hover:text-pink-600 ${isEven ? "md:text-left" : "md:text-right"
                      }`}
                  >
                    <span className="font-light block">{post.title}</span>
                  </h2>
                </Link>

                {post._createdAt && (
                  <p
                    className={`text-sm md:text-base font-light uppercase text-gray-700 ${isEven ? "md:text-left" : "md:text-right"
                      }`}
                  >
                    {formatDate(post._createdAt)}
                  </p>
                )}

                {post.body && (
                  <div
                    className={`text-base sm:text-lg text-gray-800 line-clamp-3 ${isEven ? "md:text-left" : "md:text-right"
                      }`}
                  >
                    <PortableText value={post.body} />
                  </div>
                )}
              </div>
            </div>
          </BackgroundWrapper>
        );
      })}

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center flex-wrap gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 text-sm md:text-base rounded-full border transition-colors ${currentPage === i + 1
                  ? "bg-pink-600 text-white border-pink-600"
                  : "bg-white text-black hover:bg-gray-100"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
