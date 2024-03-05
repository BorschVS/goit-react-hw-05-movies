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
