"use client";
import "../../styles/_common.scss";

export default function AnimatedButton({
  label = "Connect Us",
  onClick,
  className = "",
}) {
  return (
    <button
      className={`button connect-btn ${className}`}
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  );
}
