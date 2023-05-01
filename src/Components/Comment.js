import "../Styles/Comment.css";

const Comment = () => {
  return (
    <>
      <div>
        <div>
          <div className="commentDiv">
            <div className="signUpLogoDiv commentProfileDiv">
              <img
                className="commentProfileImg"
                src="img/recommend_detail2.png"
                alt=""
              />
            </div>
            <div className="commentDiv">
              <p className=" commentNickname">fasd1234</p>

              <span className="commentDate">14 시간 전</span>
              <br />
              <p className=" comment">굿</p>
              <br />
              <p className=" writeReply">답글 작성</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
