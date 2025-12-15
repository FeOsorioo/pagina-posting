import { postPathsQuery, postQuery } from "@/lib/sanity/queries";
import { sanityFetch } from "@/lib/sanity/fetch";
import { client } from "@/lib/sanity/client";
import SinglePost from "@sections/SinglePost";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

const PostPage = async ({ params }) => {
  const post = await sanityFetch({ query: postQuery, params });
  return (
    <>
      <SinglePost post={post} />
    </>
  );
};

export default PostPage;
