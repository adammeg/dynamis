export default function Loading() {
  return (
    <div
      className="studio"
      role="status"
      aria-label="Loading page"
      style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}
    >
      <span className="eyebrow">
        <span className="signal" />
        Loading
      </span>
    </div>
  );
}
