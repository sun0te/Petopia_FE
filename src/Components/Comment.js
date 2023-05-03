import "../Styles/Comment.css";

const Comment = (props) => {
  return (
    <>
      <div className="commentDiv">
        <div className="commentProfileDiv">
          <img
            className="commentProfileImg"
            src={props.commentProfile}
            alt=""
          />
        </div>
        <div className="commentContentDiv">
          <p className=" commentNickname">{props.commentWriter}</p>

          <span className="commentDate">{props.commentTime}</span>
          <br />
          <p className="comment">{props.commentContent}</p>
          <br />
          <p className="writeReply">답글 작성</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
