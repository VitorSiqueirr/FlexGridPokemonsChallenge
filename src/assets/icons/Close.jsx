/* eslint-disable react/prop-types */
export default function CloseIcon({ fillColor }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className="close-icon"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 26.1L13.5 36.6C13.2 36.9 12.85 37.05 12.45 37.05C12.05 37.05 11.7 36.9 11.4 36.6C11.1 36.3 10.95 35.95 10.95 35.55C10.95 35.15 11.1 34.8 11.4 34.5L21.9 24L11.4 13.5C11.1 13.2 10.95 12.85 10.95 12.45C10.95 12.05 11.1 11.7 11.4 11.4C11.7 11.1 12.05 10.95 12.45 10.95C12.85 10.95 13.2 11.1 13.5 11.4L24 21.9L34.5 11.4C34.7999 11.1 35.15 10.95 35.5499 10.95C35.9499 10.95 36.2999 11.1 36.5999 11.4C36.8999 11.7 37.0499 12.05 37.0499 12.45C37.0499 12.85 36.8999 13.2 36.5999 13.5L26.1 24L36.5999 34.5C36.8999 34.8 37.0499 35.15 37.0499 35.55C37.0499 35.95 36.8999 36.3 36.5999 36.6C36.2999 36.9 35.9499 37.05 35.5499 37.05C35.15 37.05 34.7999 36.9 34.5 36.6L24 26.1Z"
        fill={fillColor}
      />
    </svg>
  );
}