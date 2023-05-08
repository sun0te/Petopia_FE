import "../../Styles/UserBoard.css";

const RegionBoardSelect = () => {
  const toRegionList = () => {
    window.location.href = "/userregion";
  };
  return (
    <div className="selectBox" onClick={toRegionList}>
      <div className="boardTitle">지역 게시판</div>
      <div className="boardExplain">지역별 모임을 위한 공간입니다.</div>
    </div>
  );
};

export default RegionBoardSelect;
