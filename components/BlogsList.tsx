"use client";

import { useBlog } from "@/hooks/blog";
import { useState, useEffect } from "react";
import Image from "next/image";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const BlogsList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { blogs, isLoading } = useBlog({
    page,
    perPage: 6,
    search: keyword,
  });

  useEffect(() => {
    const t = setTimeout(() => {
      setKeyword(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <div className="w-screen flex  flex-col items-center-safe gap-5">
      {isLoading ? (
        <p className="text-2xl animate-pulse mt-10 text-gray-700">
          Memuat. . .
        </p>
      ) : null}
      {blogs && blogs.data.length > 0 ? (
        <>
          <div className="w-full lg:max-w-[70dvw] h-full grid grid-cols-2 md:grid-cols-3 gap-3 place-items-center mt-12 md:px-7">
            {blogs?.data.map((blog, index) => (
              <BlogCard blog={blog} key={blog?.id} />
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-white ring-1 ring-slate-200/70">
            <Pagination
              currentPage={blogs.current_page}
              lastPage={blogs.last_page}
              total={blogs.total}
              from={blogs.from}
              to={blogs.to}
              onPageChange={setPage}
            />
          </div>
        </>
      ) : null}

      {blogs && blogs.data.length == 0 ? (
        <p className="text-center">Belum Ada Blog</p>
      ) : null}
    </div>
  );
};

export default BlogsList;
