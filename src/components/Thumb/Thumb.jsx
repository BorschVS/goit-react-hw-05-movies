import { ThumbWrapper, Img } from './Thumb.styled';
const Thumb = ({ src, alt }) => {
  return (
    <ThumbWrapper>
      <Img src={src} alt={alt} />
    </ThumbWrapper>
  );
};

export default Thumb;
