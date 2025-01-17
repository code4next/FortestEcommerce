export function formateCurency(monyInCents) {
  return (Math.round( monyInCents) / 100).toFixed(2);
}
