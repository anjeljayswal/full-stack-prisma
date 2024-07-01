// src/app/page.tsx 
import prisma from "../../lib/prisma";
async function getPosts() {
  // console.log(prisma)
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}
export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      hii,
      {/* {posts.map((item,index)=>{
        return <div>{item.id}</div>
      })} */}
     </div>
    </main>
  );
}
