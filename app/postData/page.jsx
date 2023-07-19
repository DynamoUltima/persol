import Image from "next/image";
import Link from "next/link";
import Container from "../components/container";
import { notFound } from "next/navigation";
;
import { parseISO, format } from "date-fns";

import CategoryLabel from "../components/category";
// import AuthorCard from "@/components/blog/authorCard";

export default function Page(props) {
  const { loading,  } = props;
  const post ={
    _id: "1",
    title: "post man",
    slug: "9",
    mainImage: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    author: { name:"Joel", image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
    categories:["Hope","health"],
  };

  const slug = post?.slug;

//   if (!loading && !slug) {
//     notFound();
//   }

  // const imageProps = post?.mainImage
  //   ? urlForImage(post?.mainImage)
  //   : null;

  // const AuthorimageProps = post?.author?.image
  //   ? urlForImage(post.author.image)
  //   : null;

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {post?.author?.image && (
                 
                    <Image
                      src={post?.author?.image}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  
                    {post.author.name}
                  
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  {/* <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}>
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time> */}
                  {/* <span>· {post.estReadingTime || "5"} min read</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {post?.mainImage && (
          <Image
            src={post?.mainImage}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            {post.body && <PortableText value={post.body} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← View all posts
            </Link>
          </div>
          {/* {post.author && <AuthorCard author={post.author} />} */}
        </article>
      </Container>
    </>
  );
}