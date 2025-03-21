import Post from "./Post";
import style from "./PostList.module.css";
import { useEffect } from "react";
import { itemsAction } from "../store/itemSlice";
import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      if (posts.length === 0) {
        try {
          const response = await fetch("https://dummyjson.com/posts");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          dispatch(itemsAction.setItems(data.posts));
        } catch (error) {
          console.error("Error loading posts:", error);
        }
      }
    };
    fetchPosts();
  }, [dispatch, posts.length]);

  if (!posts.length) {
    return (
      <div className="container text-center mt-5">
        <p className="h4">No posts available.</p>
        <p className="text-muted">Be the first one to create a post!</p>
      </div>
    );
  }

  return (
    <div className={style.postListContainer}>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-12 mb-4">
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
//import { useLoaderData, useNavigation } from "react-router-dom";
// if (!postList || postList.length === 0) {
//   return (
//     <div className="container text-center mt-5">
//       <p className="h4">No posts available.</p>
//       <p className="text-muted">Be the first one to create a post!</p>
//     </div>
//   );
// }
/*export const postLoader = async () => {
  try {
//     const response = await fetch("https://dummyjson.com/posts");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.posts;
//   } catch (error) {
//     console.error("Error loading posts:", error);
//     throw error;
//   }
// };


// const postList = useLoaderData();
// const navigation = useNavigation();
// if (navigation.state === "loading") {
//   return (
//     <div className="text-center mt-5">
//       <div className="spinner-border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     </div>
//   );
// }*/
