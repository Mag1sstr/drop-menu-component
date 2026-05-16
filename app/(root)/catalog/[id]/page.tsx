"use client";
import { useParams } from "next/navigation";

function SingleProductPage() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl">{id}</h1>
    </div>
  );
}

export default SingleProductPage;
