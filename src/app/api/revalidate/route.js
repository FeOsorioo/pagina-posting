import { NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(req) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const body = await req.json();

  revalidateTag("sanity");
  revalidatePath("/blogs");

  if (body?.slug?.current) {
    revalidatePath(`/blogs/${body.slug.current}`);
  }

  return NextResponse.json({ revalidated: true });
}
