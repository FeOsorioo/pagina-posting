import { sanityFetch } from "@/lib/sanity/fetch";
import { postsQuery } from "@/lib/sanity/queries";
import BannerWithImage from "@sections/BannerWithImage";
import Posts from "@sections/Posts";
import banner from "@/assets/blogs/banner.webp";
import banner_responsive from "@/assets/blogs/banner_responsive.webp";

export const revalidate = 3600;

export default async function Blogs() {
  const posts = await sanityFetch({
    query: postsQuery,
    tags: ["sanity", "posts"],
  });

  return (
    <>
      <BannerWithImage
        backgroundImageUrl={banner.src}
        backgroundImageUrlResponsive={banner_responsive.src}
        textColor="text-white"
        align="left"
        title="Blogs"
        buttonText=" &#8595;"
        buttonUrl="#inicio"
        height="h-[50vh] md:h-[70vh]"
      />

      <Posts posts={posts} />
    </>
  );
}
