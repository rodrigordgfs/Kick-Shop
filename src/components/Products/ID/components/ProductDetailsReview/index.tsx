import {
  ProductDetailsNewReviewContainer,
  ProductDetailsNewReviewForm,
  ProductDetailsNewReviewRating,
  ProductDetailsReviewComments,
  ProductDetailsReviewContainer,
  ProductDetailsReviewItem,
  ProductDetailsReviewItemComment,
  ProductDetailsReviewItemHeader,
  ProductDetailsReviewItemHeaderImage,
  ProductDetailsReviewItemHeaderInfo,
} from "@/styles/pages/Products/ID/components/productsDetailsReview";
import { BsFillPersonFill } from "react-icons/bs";
import StarRatings from "react-star-ratings";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const ReviewFormSchema = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  comment: z.string().min(6),
});

type ReviewFormType = z.infer<typeof ReviewFormSchema>;

export function ProductDetailsReview() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ReviewFormType>({
    resolver: zodResolver(ReviewFormSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const [rating, setRating] = useState(0);

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "jhon@dow.com",
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet. Et porro voluptatem ea dolores sunt qui nihil temporibus et dolorem dolorum rem internos autem et sint laudantium ea quaerat omnis.",
    },
    {
      id: 2,
      name: "Apollo Daiki",
      email: "jhon@dow.com",
      rating: 4,
      comment:
        "Aut impedit sunt ad eaque recusandae in velit magni ea vero dolorem in nihil facere. Non consectetur magni est expedita aliquam qui ipsum asperiores! Qui possimus quia ut dolor ipsa in voluptas Quis.",
    },
    {
      id: 3,
      name: "Akhenaten Hillary",
      email: "jhon@dow.com",
      rating: 3,
      comment:
        "Et dolorum sint sed voluptatem iure et eligendi quisquam sed quos omnis aut quas facere. Id accusantium numquam quo sint incidunt aut voluptatem enim ut similique voluptas.",
    },
  ]);

  async function handleReview(data: ReviewFormType) {
    const { name, email, comment } = data;
    setComments((state) => [
      ...state,
      {
        id: state.length + 1,
        rating,
        name,
        email,
        comment,
      },
    ]);
    reset();
  }

  function handleChangeRating(newRating: number) {
    setRating(newRating);
  }

  return (
    <ProductDetailsReviewContainer>
      <ProductDetailsReviewComments>
        {comments.map((comment) => (
          <ProductDetailsReviewItem key={comment.id}>
            <ProductDetailsReviewItemHeader>
              <ProductDetailsReviewItemHeaderImage>
                <BsFillPersonFill size={24} />
              </ProductDetailsReviewItemHeaderImage>
              <ProductDetailsReviewItemHeaderInfo>
                <p>{comment.name}</p>
                <StarRatings
                  rating={comment.rating}
                  starRatedColor="#FF6650"
                  starDimension="12px"
                  starSpacing="1px"
                />
              </ProductDetailsReviewItemHeaderInfo>
            </ProductDetailsReviewItemHeader>
            <ProductDetailsReviewItemComment>
              {comment.comment}
            </ProductDetailsReviewItemComment>
          </ProductDetailsReviewItem>
        ))}
      </ProductDetailsReviewComments>
      <ProductDetailsNewReviewContainer>
        <h3>Leave a review</h3>
        <ProductDetailsNewReviewRating>
          <p>Your rating</p>
          <StarRatings
            rating={rating}
            changeRating={handleChangeRating}
            starRatedColor="#FF6650"
            starDimension="16px"
            starSpacing="1px"
          />
        </ProductDetailsNewReviewRating>
        <ProductDetailsNewReviewForm onSubmit={handleSubmit(handleReview)}>
          <div>
            <input
              type="text"
              placeholder="Name"
              required
              disabled={isSubmitting}
              {...register("name")}
            />
            <input
              type="email"
              placeholder="Email"
              required
              disabled={isSubmitting}
              {...register("email")}
            />
          </div>
          <textarea
            placeholder="Your review"
            rows={3}
            disabled={isSubmitting}
            {...register("comment")}
          />
          <input type="submit" value="Submit Review" />
        </ProductDetailsNewReviewForm>
      </ProductDetailsNewReviewContainer>
    </ProductDetailsReviewContainer>
  );
}
