
export function getRandomPage(min: number, max: number) {
  return Math.random() * (max - min) + min;
}