"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);

  async function GetPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const postss = response.data;
      setPosts(postss);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    GetPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-10  text-center">Posts</h1>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.slice(0, 10).map((post) => (
            <div
              key={post.id}
              className="bg-white text-black shadow-md p-6 rounded-lg cursor-pointer"
            >
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>

              <p className="text-lg mb-5">{post.body}</p>
              <Link href={`/${post.id}`}>
                <button className="bg-blue-500 text-white  px-4 py-2 rounded hover:bg-blue-600">
                  View Post
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-2xl text-center text-white">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PostsComponent;
