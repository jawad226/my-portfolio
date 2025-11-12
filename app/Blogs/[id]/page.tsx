import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import blogsData from "../../../public/blogs.json";

interface Blog {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category?: string;
  readTime?: string;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const blogs: Blog[] = blogsData;
  
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    notFound();
  }
  const relatedBlogs = blogs
    .filter(b => b.id !== blog.id)
    .slice(0, 3);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/Blogs" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 font-medium transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blogs
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Share:</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section className="min-h-screen bg-gradient-to-br from-[#f6fdfa] via-[#f1f9f7] to-[#e8f6f3] py-12">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12 px-6">
            <div className="flex justify-center gap-4 mb-6">
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                {blog.category || "Web Development"}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{blog.readTime || "5 min read"}</span>
              </div>
            </div>
          </header>
          <div className="mb-12 px-6">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden mx-6">
            <div className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-teal-600 prose-blockquote:bg-teal-50 prose-blockquote:italic prose-ul:text-gray-700 prose-ol:text-gray-700">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-8">
                    {paragraph}
                  </p>
                ))}
                
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 my-12 border border-teal-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    💡 Key Takeaways
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {blog.excerpt.split('. ').map((point, index) => (
                      point.trim() && (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>{point.replace('.', '')}.</span>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  #WebDevelopment
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  #{blog.category?.toLowerCase() || 'programming'}
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  #Tutorial
                </span>
              </div>
            </div>
          </div>
        </article>
        {relatedBlogs.length > 0 && (
          <section className="max-w-6xl mx-auto mt-20 px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  href={`/blogs/${relatedBlog.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{relatedBlog.date}</p>
                    <p className="text-gray-700 text-sm line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        <section className="max-w-4xl mx-auto mt-20 px-6">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Level Up Your Skills?
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are transforming their careers with practical, real-world tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Blogs"
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore More Articles
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export async function generateStaticParams() {
  const blogs: Blog[] = blogsData;
  
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const blogs: Blog[] = blogsData;
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | DevBlog`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      type: 'article',
      publishedTime: blog.date,
    },
  };
}


