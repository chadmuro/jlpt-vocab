export function generateRandomNumbers(
  count: number,
  excludeNumbers: number[],
  total: number
): number[] {
  if (excludeNumbers.length >= total) {
    return [];
  }

  const remainingNumbers: number[] = [];
  const availableNumbers: number[] = [];

  // Generate all available numbers within the range (1 to total)
  for (let i = 1; i <= total; i++) {
    availableNumbers.push(i);
  }

  // Filter out numbers that are in the excludeNumbers array
  const availableNumbersFiltered = availableNumbers.filter(
    (num) => !excludeNumbers.includes(num)
  );

  // Pick count number of random numbers from the available numbers
  while (
    remainingNumbers.length < count &&
    availableNumbersFiltered.length > 0
  ) {
    const randomIndex = Math.floor(
      Math.random() * availableNumbersFiltered.length
    );
    const randomNumber = availableNumbersFiltered.splice(randomIndex, 1)[0];
    remainingNumbers.push(randomNumber);
  }

  return remainingNumbers;
}
