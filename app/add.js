export default function add(numbers) {
  if (!numbers) return 0;

  let delimiters = [",", "\n"];
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const customDelimiter = parts[0].slice(2);
    delimiters.push(customDelimiter);
    numString = parts.slice(1).join("\n");
  }

  const regex = new RegExp(`[${delimiters.join("")}]`);
  const numArray = numString.split(regex).map(Number);

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
