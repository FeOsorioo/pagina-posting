/**
 * @fileoverview SinglePost – Vista de un artículo individual del blog.
 *
 * Muestra:
 * - Banner con la imagen destacada del post
 * - Contenido del artículo (PortableText)
 * - Posts relacionados (CardBlog)
 */

import { sanityFetch } from "@/lib/sanity/fetch";
import { relatedPostsQuery } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanity/client";

import BannerWithImage from "@sections/BannerWithImage";
import CardBlog from "@ui/CardBlog";

import bg1 from "@/assets/background/bg1.webp";
import bg2 from "@/assets/background/bg2.webp";

const builder = imageUrlBuilder(client);

/**
 * @component SinglePost
 * @param {Object} props
 * @param {{ title:string, body:Array, bannerImage?:Object, slug?:{current:string}, author?:string }} props.post
 */
const SinglePost = async ({ post }) => {
  if (!post) return null;

  const relatedPosts = await sanityFetch({
    query: relatedPostsQuery,
    params: { slug: post.slug?.current },
  });

  const bannerUrl = post.bannerImage
    ? builder.image(post.bannerImage).url()
    : null;

  return (
    <div className="w-full overflow-hidden">
      {/* ===== Banner principal ===== */}
      {bannerUrl && (
        <BannerWithImage
          backgroundImageUrl={bannerUrl}
          title={post.title}
          textColor="text-white"
          textSize="text-2xl sm:text-3xl md:text-5xl"
          align="left"
          buttonText="&#8595;"
          buttonUrl="#inicio"
          height="h-[35vh] sm:h-[50vh] md:h-[70vh]"
        />
      )}

      {/* ===== Contenido principal ===== */}
      <main
        id="inicio"
        className="max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16"
      >
        {post.author && (
          <p className="text-black/60 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            {post.author}
          </p>
        )}

        {post.body && (
          <PortableText
            value={post.body}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="whitespace-pre-line leading-relaxed text-black/80 text-base sm:text-lg md:text-xl my-4 sm:my-6">
                    {children}
                  </p>
                ),
              },
            }}
          />
        )}
      </main>

      {/* ===== Posts relacionados ===== */}
      {relatedPosts?.length > 0 && (
        <section className="mt-12 sm:mt-16 md:mt-24 mb-12 sm:mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-center text-black/80">
              También podría interesarte
            </h2>

            <CardBlog posts={relatedPosts} borders={[bg1, bg2]} />
          </div>
        </section>
      )}
    </div>
  );
};

export default SinglePost;
