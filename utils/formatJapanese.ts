export function formatJapanese(input: string) {
  // Remove kanji characters and the brackets
  // eslint-disable-next-line no-control-regex
  let result = input.replace(/[^\x00-\x7F]*\[(.*?)\]/g, "$1");

  // Remove any extra spaces
  result = result.replace(/\s+/g, "");

  return result;
}
