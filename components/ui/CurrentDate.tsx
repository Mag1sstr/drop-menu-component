import { formatDate } from "@/helpers/formatDate";
import { useEffect, useState } from "react";

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white absolute right-10 top-1/2 -translate-y-1/2">
      {formatDate(date)} {date.getHours() + ":" + date.getMinutes() + ":"}
      {Number(date.getSeconds()) < 10
        ? `0${date.getSeconds()}`
        : date.getSeconds()}
    </div>
  );
}

export default CurrentDate;
