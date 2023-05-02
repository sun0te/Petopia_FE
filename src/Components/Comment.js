import "../Styles/Comment.css";

const Comment = () => {
  return (
    <>
      <div className="commentDiv">
        <div className="commentProfileDiv">
          <img
            className="commentProfileImg"
            src="img/recommend_detail2.png"
            alt=""
          />
        </div>
        <div className="commentContentDiv">
          <p className=" commentNickname">fasd1234</p>

          <span className="commentDate">14 시간 전</span>
          <br />
          <p className="comment">
            Porta ac consectetur acPorta ac consectetur acPorta ac consectetur
            acPorta ac consectetur acPorta ac consectetur acPorta ac consectetur
            acPorta ac consectetur acPorta ac consectetur acPorta ac consectetur
          </p>
          <br />
          <p className="writeReply">답글 작성</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
