import styled from '@emotion/styled';

export const MoviesWrapper = styled.li`
  display: flex;
  justify-content: row;
  gap: 40px;
  margin-top: 40px;
`;

export const Title = styled.h1`
  margin: 0;

  text-transform: uppercase;
  align-self: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  word-spacing: 2px;
  line-height: 1.4;
`;

export const Accent = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  color: #fcff00;
`;

export const MovieThumb = styled.div`
  display: block;
  width: 260px;
  height: auto;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;
