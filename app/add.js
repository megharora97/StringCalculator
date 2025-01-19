export default function add(numbers) {
  if (!numbers) return 0;

  const delimiters = [",", "\n"];
  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numArray = numbers.split(regex).map(Number);

  return numArray.reduce((sum, num) => sum + num, 0);
}
