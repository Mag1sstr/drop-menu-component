export function formatDate(date: Date) {
  return date.toLocaleDateString("RU-ru", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
}
