export const BASE_PATH = "/solyn-portfolio";

export function withBasePath(src: string): string {
  if (
    src.startsWith("http") ||
    src.startsWith("//") ||
    src.startsWith(BASE_PATH)
  ) {
    return src;
  }
  return `${BASE_PATH}${src}`;
}
