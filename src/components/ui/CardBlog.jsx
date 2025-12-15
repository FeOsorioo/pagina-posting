import { client } from "@/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

const builder = imageUrlBuilder(client);

export default function CardBlog({ posts = [] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => {
        const imageUrl = post?.mainImage
          ? builder.image(post.mainImage).width(300).height(300).url()
          : null;

        return (
          <article
            key={post._id || index}
            className="group flex flex-col overflow-hidden rounded-xl bg-white border border-gray-300 shadow-md 
                       transition-all duration-300 hover:shadow-xl"
            role="article"
            aria-label={`Artículo: ${post.title}`}
          >
            {/* Imagen */}
            {imageUrl && (
              <div className="p-6 flex justify-center items-center bg-gray-50">
                <Image
                  src={imageUrl}
                  alt={post?.mainImage?.alt || post.title}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}

            {/* Contenido */}
            <div className="p-5 flex flex-col flex-1 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>

              {post?.slug?.current && (
                <Link
                  href={`/blogs/${post.slug.current}`}
                  className="text-pink-600 font-medium hover:underline mt-auto"
                  aria-label={`Leer artículo ${post.title}`}
                >
                  Leer más →
                </Link>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
