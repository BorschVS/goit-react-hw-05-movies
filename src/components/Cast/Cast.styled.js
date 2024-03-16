import styled from '@emotion/styled';

export const CastList = styled.ul`
  position: relative;
  overflow-y: hidden;
  overflow-x: scroll;
  height: 360px;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #cdcdcd;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #323232;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #fcff00;
  }
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 260px;
  font-size: 14px;
`;

export const CastThumb = styled.div`
  width: 200px;
  height: 200px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;
