function ReviewStars({ value = 5 }) {
  return (
    <span>
      {Array.from({ length: 5 }).map((_, i) =>
        <span key={i}>{i < value ? "★" : "☆"}</span>
      )}
    </span>
  );
}
export default ReviewStars;
