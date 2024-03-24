import { getReviews } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Rating,
  ReviewBox,
  ReviewItem,
  ReviewLink,
  ReviewList,
  ReviewWrapper,
  Text,
  Title,
} from './Reviews.styled';

const Reviews = () => {
  const [isLoading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const movieReviews = await getReviews(id);
        setReviews(movieReviews);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return ( reviews.length > 0 ?
    !isLoading && (
      <ReviewList>
        {reviews.map(({ id, author_details, url }) => (
          <ReviewItem key={id}>
            <ReviewBox>
              <Rating>{author_details.rating}</Rating>
            </ReviewBox>

            <ReviewWrapper>
              <Title>{author_details.username}</Title>
              <Text>
                <ReviewLink
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch review
                </ReviewLink>
              </Text>
            </ReviewWrapper>
          </ReviewItem>
        ))}
      </ReviewList>
    ) : !isLoading && <p>There are no reviews</p>
  );
};

export default Reviews;
