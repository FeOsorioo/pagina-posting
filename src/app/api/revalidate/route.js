import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Invalid token" },
      { status: 401 }
    );
  }

  let body = null;

  try {
    body = await req.json();
  } catch (error) {
    console.error("Webhook body is not valid JSON");
  }

  // Revalidaciones seguras (aunque no haya body)
  revalidateTag("sanity");
  revalidatePath("/blogs");

  // Revalidación por slug si existe
  if (body?.slug?.current) {
    const slug = body.slug.current;
    revalidatePath(`/blogs/${slug}`);
    revalidateTag(`post:${slug}`);
  }

  return NextResponse.json({ revalidated: true });
}
