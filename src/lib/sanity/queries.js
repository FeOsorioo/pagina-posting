// Get all posts
export const postsQuery = `
*[_type == "post"] {
  _id,
  _createdAt,
  title,
  slug,
  mainImage,
  body,
  "imageURL": mainImage.asset->url
}
`;

// Get a single post by its slug
export const postQuery = `
*[_type == "post" && slug.current == $slug][0]{ 
  title,
  description,
  mainImage,
  bannerImage,
  slug,
  body
}
`;

// Get all post slugs
export const postPathsQuery = `
*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}
`;

// Related posts
export const relatedPostsQuery = `
*[_type == "post" && slug.current != $slug] 
| order(_createdAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage
}
`;
