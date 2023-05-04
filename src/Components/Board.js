import React from "react";
import styled from "styled-components";
import Card from "./Card";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Board() {
  return (
    <NoticeContainer>
      <BoardWrapper>
        <Card />
      </BoardWrapper>
    </NoticeContainer>
  );
}

export default Board;
