export function textTruncate(text: string) {
  if (text.length < 140) {
    return text;
  }
  return text.slice(0, 180) + "...";
}
