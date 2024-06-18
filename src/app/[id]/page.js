"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const SpecificPost = ({ params }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (params.id) {
      GetOnePost(params.id);
    }
  }, [params.id]);

  const GetOnePost = async (postId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container bg-white mt-10 text-black shadow-md p-6 rounded-lg  mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.id}</h1>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-6">{post.body}</p>
    </div>
  );
};

export default SpecificPost;
