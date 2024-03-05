import styled from '@emotion/styled';

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  border-right: 2px solid #fcff00;
`;

export const ReviewBox = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #676767;
  border: 2px solid #fcff00;
`;

export const Rating = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #fcff00;
  color: #676767;
  text-align: center;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;

  border-bottom: 2px solid #fcff00;

  &:first-of-type {
    border-top: 2px solid #fcff00;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;

  margin-bottom: 6px;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;

export const ReviewLink = styled.a`
  color: #fcff00;

  text-decoration: none;
  border: 1px solid #fcff00;
  padding: 0 4px;

  &:hover {
    background-color: #fcff00;
    color: #323232;
  }

  &:active {
    background-color: #00000000;
    color: #fcff00;
  }
`;
