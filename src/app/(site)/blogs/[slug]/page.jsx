import { postQuery } from "@/lib/sanity/queries";
import { sanityFetch } from "@/lib/sanity/fetch";
import SinglePost from "@sections/SinglePost";

export const revalidate = 3600;
export const dynamicParams = true;

const PostPage = async ({ params }) => {
const post = await sanityFetch({
  query: postQuery,
  params,
  tags: ["sanity", `post:${params.slug}`],
});


  return <SinglePost post={post} />;
};

export default PostPage;
