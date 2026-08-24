"use client";
import { usePagination } from "@/hooks/usePagination";
import { useGetReviewsQuery } from "@/store/frostApi";
import Pagination from "./Pagination";

interface IProps {
  productId: number;
}
function Reviews({ productId }: IProps) {
  const { data: reviews = [] } = useGetReviewsQuery(productId);

  const { totalPages, startIndex, endIndex, currentPage, setCurrentPage } =
    usePagination({ data: reviews, pageSize: 6 });
  return (
    <div>
      <h3 className="text-2xl mb-12">Коментарии</h3>

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
