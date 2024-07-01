import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log('res: ', res);
  const { title, content } = res;

  try {
    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          create: {
            name: 'ryan'
          }
        }
      }
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
