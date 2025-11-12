"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import blogsData from "../../public/blogs.json";

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

export default function BlogsPage() {
  const blogs: Blog[] = blogsData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(blogs.map(blog => blog.category || "general"))];

  const filteredBlogs = selectedCategory === "all"
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f6fdfa] via-[#f1f9f7] to-[#e8f6f3] py-5 px-2 lg:px-24">
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          My <span className="text-teal-600">Blog</span> Journey
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore in depth tutorials, coding experiences, and insights from my journey as a full stack developer.
        </p>
      </motion.header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium capitalize transition-all duration-300 ${selectedCategory === category
                ? "bg-teal-600 text-white shadow-lg shadow-teal-200"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
      {selectedCategory === "all" && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
          <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="lg:flex">
              <div className="relative lg:w-1/2 h-80 lg:h-auto">
                <Image
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {blogs[0].category || "Web Development"}
                  </span>
                  <span className="text-gray-500 text-sm">{blogs[0].readTime || "5 min read"}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-teal-600 transition-colors">
                  {blogs[0].title}
                </h3>
                <p className="text-gray-600 mb-2">{blogs[0].date}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {blogs[0].excerpt}
                </p>
                <Link
                  href={`/Blogs/${blogs[0].id}`}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                >
                  Read Featured Article
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <motion.article
            key={blog.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5 }}
            className="group bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  {blog.category || "Development"}
                </span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-500">{blog.date}</span>
                <span className="text-sm text-teal-600 font-medium">{blog.readTime || "4 min read"}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
                {blog.title}
              </h3>

              <p className="text-gray-600 leading-relaxed flex-1 mb-4">
                {blog.excerpt.length > 100 ? `${blog.excerpt.slice(0, 100)}...` : blog.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <Link
                  href={`/Blogs/${blog.id}`}
                  className="inline-flex items-center justify-center w-full bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                >
                  Read Full Article
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      {filteredBlogs.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
          <p className="text-gray-600">We couldn't find any articles in this category.</p>
        </motion.div>
      )}
    </section>
  );
}