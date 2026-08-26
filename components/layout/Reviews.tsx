"use client";
import { usePagination } from "@/hooks/usePagination";
import {
  useCheckReviewQuery,
  useCreateReviewMutation,
  useGetReviewsQuery,
} from "@/store/frostApi";
import Pagination from "./Pagination";
import Button from "../ui/Button";
import { useState } from "react";

interface IProps {
  productId: number;
}
function Reviews({ productId }: IProps) {
  const [reviewValue, setReviewValue] = useState("");
  const { data: reviews = [] } = useGetReviewsQuery(productId);

  const { totalPages, startIndex, endIndex, currentPage, setCurrentPage } =
    usePagination({ data: reviews, pageSize: 6 });

  const { data: isReviewSubmitted } = useCheckReviewQuery(productId);
  const [createReview] = useCreateReviewMutation();

  const handleSubmit = () => {
    createReview({ product_id: productId, review: reviewValue });
  };

  console.log("isReviewSubmitted " + isReviewSubmitted);

  return (
    <div>
      <h3 className="text-2xl mb-12">Отзывы</h3>

      {isReviewSubmitted ? (
        <p className="mb-12 text-green-600">Спасибо за оставленный отзыв!</p>
      ) : (
        <div className="mb-12">
          <textarea
            value={reviewValue}
            onChange={(e) => setReviewValue(e.target.value)}
            className="resize-none h-25 border border-(--gray) bg-white w-full p-3 "
            placeholder="Оставьте свой отзыв"
          ></textarea>
          <div className="flex">
            <Button
              disabled={!reviewValue.length}
              onClick={handleSubmit}
              className="text-[12px]! text-(--prime)! ml-auto transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Оставить отзыв
            </Button>
          </div>
        </div>
      )}

      {reviews?.slice(startIndex, endIndex).map(({ id, user, review }) => (
        <div key={id} className="py-9 border-t border-(--gray)">
          <strong>
            {user.firstName} {user.lastName}
          </strong>
          <p>{review}</p>
        </div>
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Reviews;
