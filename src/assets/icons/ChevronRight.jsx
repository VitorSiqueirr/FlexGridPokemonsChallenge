/* eslint-disable react/prop-types */
export default function ChevronRightIcon({ fillColor }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className="chevron-right-icon"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="1" dy="1" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M17.6999 34.9C17.4332 34.5667 17.2916 34.2 17.2749 33.8C17.2582 33.4 17.3999 33.05 17.6999 32.75L26.4999 23.95L17.6499 15.1C17.3832 14.8333 17.2582 14.475 17.2749 14.025C17.2916 13.575 17.4332 13.2167 17.6999 12.95C18.0332 12.6167 18.3916 12.4583 18.7749 12.475C19.1582 12.4917 19.4999 12.65 19.7999 12.95L29.7499 22.9C29.9166 23.0667 30.0332 23.2333 30.0999 23.4C30.1666 23.5667 30.1999 23.75 30.1999 23.95C30.1999 24.15 30.1666 24.3333 30.0999 24.5C30.0332 24.6667 29.9166 24.8333 29.7499 25L19.8499 34.9C19.5499 35.2 19.1999 35.3417 18.7999 35.325C18.3999 35.3083 18.0332 35.1667 17.6999 34.9Z"
        fill={fillColor}
        filter="url(#shadow)"
      />
    </svg>
  );
}
