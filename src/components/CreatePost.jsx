import { Form, useNavigate } from "react-router-dom";
import style from "./CreatePost.module.css";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { useState } from "react";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.target);
    const newPost = {
      title: formData.get("title"),
      body: formData.get("body"),
      tags: formData.get("tags").split(" "),
      userId: 5,
      reactions: 0,
    };

    try {
      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create post");
      }

      const savedPost = await response.json();

      // Add our custom reactions structure
      const postWithReactions = {
        ...savedPost,
        reactions: {
          likes: 0,
          dislikes: 0,
        },
      };

      dispatch(itemsAction.addItems(postWithReactions));
      event.target.reset();
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <Form className={style["create-post"]} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            name="body"
            rows="4"
            className="form-control"
            id="body"
            placeholder="Tell us more about it"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            placeholder="Please enter tags using space"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Creating..." : "Post"}
        </button>
      </Form>
    </>
  );
};

export default CreatePost;
