import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
// import { PostList } from "../store/post-list-store";
import style from "./Post.module.css";
import { FaCommentDots, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/itemSlice";

const Post = ({ post }) => {
  // const { deletePost } = useContext(PostList);
  const dispatch = useDispatch();

  const handleCrossClick = () => {
    dispatch(itemsAction.deleteItems(post.id));
  };

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={handleCrossClick}
          >
            <RxCross2 title="Not Interest" />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`badge text-bg-primary ${style[`hashtag`]}`}
          >
            {tag}
          </span>
        ))}
        <div
          className={`alert alert-success reactions ${style[`reactions`]}`}
          role="alert"
        >
          Likes: {post.reactions.likes} <FaRegThumbsUp /> | Dislikes:{" "}
          {post.reactions.dislikes} <FaRegThumbsDown />
          <FaCommentDots className={style.commentIcon} title="Comments" />
        </div>
      </div>
    </div>
  );
};

export default Post;
