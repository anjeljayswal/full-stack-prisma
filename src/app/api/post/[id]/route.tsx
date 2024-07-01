import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { NextRequest } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const id = params.id;

  try {
    const post = await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Error deleting post" }, { status: 500 });
  }
}
