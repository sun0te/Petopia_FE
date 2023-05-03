import "../../Styles/UserBoard.css";

const FreeBoardSelect = () => {
  const toFreeBoard = () => {
    window.location.href = "/userfreeboard";
  };
  return (
    <div className="selectBox" onClick={toFreeBoard}>
      <div className="boardTitle">자유 게시판</div>
      <div className="boardExplain">자유롭게 글을 작성할 수 있습니다.</div>
    </div>
  );
};

export default FreeBoardSelect;
