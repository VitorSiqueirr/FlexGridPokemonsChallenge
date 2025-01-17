/* eslint-disable react/prop-types */
export default function ChevronLeftIcon({ fillColor }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className="chevron-left-icon"
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
        d="M26.9501 34.9L17.0501 25C16.8834 24.8333 16.7668 24.6667 16.7001 24.5C16.6334 24.3333 16.6001 24.15 16.6001 23.95C16.6001 23.75 16.6334 23.5667 16.7001 23.4C16.7668 23.2333 16.8834 23.0667 17.0501 22.9L27.0001 12.95C27.3001 12.65 27.6584 12.5 28.0751 12.5C28.4918 12.5 28.8501 12.65 29.1501 12.95C29.4501 13.25 29.5918 13.6167 29.5751 14.05C29.5584 14.4833 29.4001 14.85 29.1001 15.15L20.3001 23.95L29.1501 32.8C29.4501 33.1 29.6001 33.45 29.6001 33.85C29.6001 34.25 29.4501 34.6 29.1501 34.9C28.8501 35.2 28.4834 35.35 28.0501 35.35C27.6168 35.35 27.2501 35.2 26.9501 34.9Z"
        fill={fillColor}
        filter="url(#shadow)"
      />
    </svg>
  );
}
