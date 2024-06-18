"use client";
import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting post:", { title, body });
    setSubmitted(true);
    setTitle("");
    setBody("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="body"
            className="block  text-lg font-medium text-gray-700"
          >
            Body
          </label>
          <textarea
            id="body"
            className="mt-1 text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            placeholder="Enter post content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Post
        </button>
      </form>

      {submitted && (
        <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
          Post submitted successfully!
        </div>
      )}
    </div>
  );
};

export default CreatePost;
