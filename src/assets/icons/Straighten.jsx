/* eslint-disable react/prop-types */
export default function StraightenIcon({ fillColor }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="straighten-icon"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 36C6.2 36 5.5 35.7 4.9 35.1C4.3 34.5 4 33.8 4 33V15C4 14.2333 4.3 13.5417 4.9 12.925C5.5 12.3083 6.2 12 7 12H41C41.8 12 42.5 12.3083 43.1 12.925C43.7 13.5417 44 14.2333 44 15V33C44 33.8 43.7 34.5 43.1 35.1C42.5 35.7 41.8 36 41 36H7ZM7 33H41V15H34.5V24H31.5V15H25.5V24H22.5V15H16.5V24H13.5V15H7V33ZM13.5 24H16.5H13.5ZM22.5 24H25.5H22.5ZM31.5 24H34.5H31.5Z"
        fill={fillColor}
      />
    </svg>
  );
}
