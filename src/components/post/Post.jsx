import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  // const [like, setLike] = useState(post.like)
  const [like, setLike] = useState(4)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            /> */}
            <img className="postProfileImg" src="/assets/fish/1.jpg" alt=""></img>
            <span className="postUsername">
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
              Tancho
            </span>
            {/* <span className="postDate">{post.date}</span> */}
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          {/* <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" /> */}
          <span className="postText">Hey! It's my first post!</span>
          <img className="postImg" src="assets/post/1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} fish like it</span>
          </div>
          <div className="postBottomRight">
            {/* <span className="postCommentText">{post.comment} comments</span> */}
            <span className="postCommentText">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}