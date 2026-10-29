export function reducedMotionStyles(): string {
  return `
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 1ms !important;
        animation-delay: 0ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 1ms !important;
      }
    }
  `;
}