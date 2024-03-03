import { ThumbWrapper, Img } from './Thumb.styled';
const Thumb = ({ src, alt, width, height }) => {

  

  return (
    <ThumbWrapper>
      <Img src={src} alt={alt} width={width} height={height} />
    </ThumbWrapper>
  );
};

export default Thumb;
